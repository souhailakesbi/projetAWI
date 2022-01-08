import {Ingredients} from "../ingredients";

export  class Step {
  idStep!: string;
  titleStep: string= "";
  description:string = "none";
  time:number = 1;
  listIngredient: Ingredients[] = [];
}
