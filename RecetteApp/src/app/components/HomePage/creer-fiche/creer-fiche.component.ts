import { Component, OnInit } from '@angular/core';

import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {Step} from "../../../models/step/step";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {StepServiceService} from "../../../services/step/step-service.service";
import Fiche from "../../../models/ficheTechnique/fiche";

@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {
   public ficheForm! : FormGroup;
  //public listeStep?: Step[];
  public recette! : Fiche;
  constructor(
  public ficheService : AjoutFicheService,
  public formBuilder : FormBuilder,
  public router: Router,
  public step : StepServiceService,
  ) {
    this.ficheForm = this.formBuilder.group({
      title: [''],
      materielDressage: [''],
      materielSpecifique: [''],
      nbCouverts: null,
      responsable:[''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ficheService.create(this.ficheForm.value);
    this.router.navigate(['AjouterEtape', this.recette.id]);
    console.log("recette",this.recette);
  }

  /*newFiche():void{
    this.submitted=false;
    this.fiche = new Fiche();
  }*/
}
