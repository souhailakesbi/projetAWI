import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Ingredients} from '../models/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private dbPath = '/ingredients';
  liste_ingredients: Ingredients[] = [];// pas necessaire
  public angularFirebase!: AngularFirestore ;
  constructor( db: AngularFirestore) {
  }

  getIngredientList() : AngularFirestoreCollection<Ingredients> {
    return this.angularFirebase.collection(this.dbPath);
    console.log("arrivé sur liste getingredient")

  }

  getIngredient(code: string) {
    return this.angularFirebase.doc(code).valueChanges();
    console.log("arrivé sur getingredient")
  }

  createIngredient(ingredient : Ingredients){
    return new Promise<any>((resolve , reject) =>{
      this.angularFirebase?.collection(this.dbPath).add(ingredient)
        .then(response => {console.log("ouiii creation faite ")}, error=> reject(error))
      }

    )
  }


  deleteIngredient(id : string){
    return this.angularFirebase?.collection(this.dbPath).doc(id).delete();
    console.log("Ingredient bien deleteingredients")
  }

  updateIngredient(ingredient: Ingredients, code: string | null){
    return this.angularFirebase?.doc(ingredient.code).update(
      {
        libelle: ingredient.libelle,
        unite: ingredient.unite,
        prix_unitaire: ingredient.prix_unitaire,
        categorie: ingredient.categorie
      }
    )
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
