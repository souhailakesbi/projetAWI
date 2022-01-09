import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Stock} from '../../models/stock/stock';
import {Observable} from "rxjs";
import {Ingredients} from "../../models/ingredients";
import {CategorieIngredient} from "../../models/categorie_ingredient/categorie-ingredient";
import {IngredientsService} from "../ingredients.service";
import {IngredientsComponent} from "../../components/HomePage/ingredients/ingredients.component";
@Injectable({
  providedIn: 'root'
})

export class CategorieIngredientService {

  private dbPath = 'categorie-ingredient';
  // ingredientService! : IngredientsService
  public angularFirebase: AngularFirestoreCollection<CategorieIngredient> ;
  constructor(private db: AngularFirestore) {
    this.angularFirebase = db.collection(this.dbPath);
  }

  getAllCategorieIngredient(){
    return this.db.collection('categorie-ingredient').snapshotChanges();
    console.log("arrivé sur liste getAllIngrredeint dans stock service ");
  }

  getCategorieIngredient(id: string|null) : Observable<any>{
    return this.db.collection('categorie-ingredient').doc(id!).valueChanges();
    console.log("arrivé sur getCategorieIngredient ")
  }



}
