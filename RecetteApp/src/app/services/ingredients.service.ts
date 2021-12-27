import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Ingredients} from '../models/ingredients';
import {Observable} from "rxjs";

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
/*
  create(ingredients: Ingredients) {
    return this.IngredientsRef.add({ ...ingredients });
  }

  update(code: string, data: any): Promise<void> {
    return this.IngredientsRef.doc(code).update(data);
  }

  delete(code: string): Promise<void> {
    return this.IngredientsRef.doc(code).delete();
  }

 */

}
