import {Step} from "../step/step";

export default class Fiche {
  id!: string;
  title!: string;
  materielDressage?: string;
  materielSpecifique?: string
  nbCouverts!: number;
  responsable!:string;
  listeStep: Step[] = [];
}
