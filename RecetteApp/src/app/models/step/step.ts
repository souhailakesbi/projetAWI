import {Ingredients} from "../ingredients";
import {FormArray} from "@angular/forms";
import {QuantiteIngredient} from "../quantite_ingredient/quantite-ingredient";

export  class Step {
  idStep!: string;
  titleStep: string= "";
  description:string = "none";
  time:number = 1;
  listIngredient!: Array<Ingredients>;
  listQuantite!: Array<number>;
}
