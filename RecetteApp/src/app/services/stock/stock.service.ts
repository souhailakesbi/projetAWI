import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Stock} from '../../models/stock/stock';
import {Observable} from "rxjs";
import {Ingredients} from "../../models/ingredients";
import {IngredientsService} from "../ingredients.service";
import {IngredientsComponent} from "../../components/HomePage/ingredients/ingredients.component";
@Injectable({
  providedIn: 'root'
})

export class StockService {
  ingredients!: Observable<Ingredients[]>
  private dbPath = 'stock';
 // ingredientService! : IngredientsService
  public angularFirebase: AngularFirestoreCollection<Stock> ;
  constructor(private db: AngularFirestore) {
    this.angularFirebase = db.collection(this.dbPath);
  }

  getAllIngredient(){
    return this.db.collection('ingredients').snapshotChanges();
    console.log("arrivé sur liste getAllIngrredeint dans stock service ");
  }

  getIngredient(id: string|null) : Observable<any>{
    return this.db.collection('ingredients').doc(id!).valueChanges();
    console.log("arrivé sur getingredient stock")
  }



  getStockList(){
    return this.db.collection('stock').snapshotChanges();
  }

  getStock(id:string|null):Observable<any>{
    return this.db.collection('stock').doc(id!).valueChanges();
  }

  createStock(stock: Stock){
    return new Promise((resolve , reject) =>{
        this.db.collection('stock').add(stock).then(response => {
          console.log(response);
        }, error=> reject(error));
      }

    );
  }

  deleteStock(id:string|null){
    return this.db.collection('stock').doc(id!).delete();
  }

  updateStock(stock : Stock, id:string|null){
    return this.db.collection('stock').doc(id!).update({
      ingredient_stock : stock.ingredient_stock,
      quantite: stock.quantite

    });

  }
}
