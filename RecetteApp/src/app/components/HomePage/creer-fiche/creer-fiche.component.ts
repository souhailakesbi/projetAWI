import { Component, OnInit } from '@angular/core';

import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {Step} from "../../../models/step/step";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StepServiceService} from "../../../services/step/step-service.service";
import Fiche from "../../../models/ficheTechnique/fiche";
import {CategorieRecetteService} from "../../../services/categorie/categorie-recette.service";
import {CategorieIngredient} from "../../../models/categorie_ingredient/categorie-ingredient";
import {CategorieRecette} from "../../../models/categorie_recette/categorie-recette";

@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {
   public ficheForm! : FormGroup;
   id! : string|null;
  categories!:CategorieRecette[];
  constructor(
  public ficheService : AjoutFicheService,
  public formBuilder : FormBuilder,
  public router: Router,
  private act:ActivatedRoute,
  public  categorieRecetteService: CategorieRecetteService
  ) {
    this.categorieRecetteService.getAllCategorieRecette().subscribe(
      res =>{
        this.categories = res.map(e => {
            return {
              idCategorieRecette: e.payload.doc.id, ...e.payload.doc.data() as {}
            } as CategorieRecette;
          }
        )
      }
    );

    this.ficheForm = this.formBuilder.group({
      title: [''],
      materielDressage: [''],
      materielSpecifique: [''],
      nbCouverts: null,
      responsable:[''],
      listeStep: [''],
      categorie:['']
    });


  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ficheService.create(this.ficheForm.value)
    console.log("Fiche sans étapes créée");
  }

  /*newFiche():void{
    this.submitted=false;
    this.fiche = new Fiche();
  }*/
}
