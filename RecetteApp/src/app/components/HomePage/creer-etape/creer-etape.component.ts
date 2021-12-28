import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {StepServiceService} from "../../../services/step/step-service.service";
import {Route, Router} from "@angular/router";
import {CreerFicheComponent} from "../creer-fiche/creer-fiche.component";
import Fiche from "../../../models/ficheTechnique/fiche";
import {Step} from "../../../models/step/step";

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {
  public stepForm : FormGroup;
  public recipe: Fiche;
  constructor(
    public stepService : StepServiceService,
    public formBuilder : FormBuilder,
    public route: Router
  ) {
    this.recipe = new Fiche();
    this.stepForm = this.formBuilder.group({
      idFiche: this.recipe.id,
      title: [''],
      description: [''],
      time: null,
    });
    this.recipe = new Fiche();
  }

  ngOnInit(): void {
  }
  onSubmitStep(){
    this.stepService.create(this.stepForm.value);
    this.route.navigate(['/AjouterEtape']);
  }
  onSubmit(){
    this.stepService.create(this.stepForm.value);
    this.route.navigate(['/Fiches',  this.recipe.id]);
  }
  addStep(step:Step){

  }

}
