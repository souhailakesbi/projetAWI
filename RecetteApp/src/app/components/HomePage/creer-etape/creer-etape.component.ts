import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {StepServiceService} from "../../../services/step/step-service.service";
import {Route, Router} from "@angular/router";
import {CreerFicheComponent} from "../creer-fiche/creer-fiche.component";
import Fiche from "../../../models/ficheTechnique/fiche";
import {Step} from "../../../models/step/step";
import {Ingredients} from "../../../models/ingredients";
import {IngredientsService} from "../../../services/ingredients.service";

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {
  public stepForm : FormGroup;
  public recipe: Fiche;
  public ingredients : Ingredients[]=[];
  constructor(
    public stepService : StepServiceService,
    public formBuilder : FormBuilder,
    public route: Router,
    public ingredientService : IngredientsService
  ) {
    this.ingredientService.getIngredientList().subscribe(
      res =>{
        this.ingredients = res.map(e=>{
          return{
            id:e.payload.doc.id,...e.payload.doc.data() as {}
          } as Ingredients;
        })
      }
    )
    this.recipe = new Fiche();
    this.stepForm = this.formBuilder.group({
      idFiche: this.recipe.id,
      title: [''],
      description: [''],
      time: [''],
      listIngredient: this.formBuilder.array([this.createIngr()])
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

  createIngr(){
    return this.formBuilder.group({
      ingredient:['',Validators.required],
      quantite:['',Validators.required]
    })
  }


  get listIngredient():FormArray{
    return this.stepForm.get('listIngredient') as FormArray;
  }
  addInput(){
    this.listIngredient.push(this.createIngr());
  }
}
