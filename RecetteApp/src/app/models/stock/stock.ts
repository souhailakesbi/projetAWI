import {Ingredients} from "../ingredients";

export class Stock {
  id!: string;
  ingredient_stock! : Ingredients;
  quantite!:number;
  prix_total!: number;
}
