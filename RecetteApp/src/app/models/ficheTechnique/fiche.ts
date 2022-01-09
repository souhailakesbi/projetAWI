import {Step} from "../step/step";
import {CategorieRecette} from "../categorie_recette/categorie-recette";

export default class Fiche {
  id!: string;
  title!: string;
  materielDressage?: string;
  materielSpecifique?: string
  nbCouverts!: number;
  responsable!:string;
  listeStep: Step[]= [];
  categorie!:CategorieRecette
}
