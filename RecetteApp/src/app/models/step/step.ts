import {Ingredients} from "../ingredients";
import {FormArray} from "@angular/forms";

export  class Step {
  idStep!: string;
  titleStep: string= "";
  description:string = "none";
  time:number = 1;
  listIngredient!: FormArray
}
