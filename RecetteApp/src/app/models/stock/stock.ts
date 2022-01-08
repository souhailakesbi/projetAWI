import {Ingredients} from "../ingredients";
import {Optional} from "@angular/core";

export class Stock {
  id!: string;
  ingredient_stock! : Ingredients;
  quantite!:number;
  prix_total!: number;

 /* constructor( @Optional() prix_total =0)
  {
    this.prix_total = this.quantite* this.ingredient_stock.prix_unitaire;
  }*/
}



