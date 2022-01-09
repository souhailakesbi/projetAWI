import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Ingredients} from '../models/ingredients';
import {Observable} from "rxjs";
import {collection, getDocs, query, where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private dbPath = 'ingredients';
  liste_ingredients: Ingredients[] = [];// pas necessaire
  public angularFirebase: AngularFirestoreCollection<Ingredients> ;
  constructor(private db: AngularFirestore) {
    this.angularFirebase = db.collection(this.dbPath);
  }
  async getIngredientByName(name: string) {
    // @ts-ignore
    const q = query(this.angularFirebase, where('libelle', '==', name))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

  }
  getIngredientList(){
    return this.db.collection('ingredients').snapshotChanges();
    console.log("arrivé sur liste getingredient");

  }

  getIngredient(id: string|null) : Observable<any>{
    return this.db.collection('ingredients').doc(id!).valueChanges();
    console.log("arrivé sur getingredient")
  }

  createIngredient(ingredient : Ingredients){
    return new Promise((resolve , reject) =>{
      this.db.collection('ingredients').add(ingredient).then(response => {
          console.log(response);
        }, error=> reject(error));
      }

    );
  }


  deleteIngredient(id: string | null){
    return this.db.collection('ingredients').doc(id!).delete();
    console.log("Ingredient bien deleteingredients");
  }

  updateIngredient(ingredient: Ingredients,id: string|null) : Promise<any>{
    //console.log("Fonction updateIngredient");
    return this.db.collection('ingredients').doc(id!).update(
      {
        code : ingredient.code,
        libelle: ingredient.libelle,
        unite: ingredient.unite,
        prix_unitaire: ingredient.prix_unitaire,
        categorie: ingredient.categorie
      }
    );
  }


}
