import {CategorieIngredient} from "./categorie_ingredient/categorie-ingredient";
import {Allergene} from "./allergene/allergene";

export class Ingredients {
  id! : string | null;
  code!: string;
  libelle!: string;
  unite!: string;
  public prix_unitaire: number =1 ;
  categorie!: CategorieIngredient;
  allergene!: Allergene

}
