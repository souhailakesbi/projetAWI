import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {StepServiceService} from "../../../services/step/step-service.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CreerFicheComponent} from "../creer-fiche/creer-fiche.component";
import Fiche from "../../../models/ficheTechnique/fiche";
import {Step} from "../../../models/step/step";
import {Ingredients} from "../../../models/ingredients";
import {IngredientsService} from "../../../services/ingredients.service";
import {ListeStepComponent} from "../liste-step/liste-step.component";

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {


  public stepForm : FormGroup;
  public recipe: Fiche;
  public ingred! : Ingredients;

  public ingredients : Ingredients[]=[];
  public listIngr : Array<Ingredients|number> = new Array<Ingredients|number>();
  private nameIngrd!: string;


  id : string |null;
  constructor(
    public stepService : StepServiceService,
    public formBuilder : FormBuilder,
    public route: Router,
    private act : ActivatedRoute,
    public ingredientService : IngredientsService,

  ) {
    this.stepService.getAllIngredient().subscribe(
      res =>{
        this.ingredients = res.map(e => {
            return {
              id: e.payload.doc.id, ...e.payload.doc.data() as {}
            } as Ingredients;
          }
        )
      }
    ); //changement souhaila
    this.id = this.act.snapshot.paramMap.get('id');
    this.recipe = new Fiche();
    this.stepForm = this.formBuilder.group({
      titleStep: [''],
      description: [''],
      time: [''],
      listIngredient: ['']
    });

    //this.recipe = new Fiche();

  }

  ngOnInit(): void {
  }
  onSubmitStep(){
    this.stepService.create(this.stepForm.value);
    //console.log(this.listStep.id)
    console.log(this.recipe.id)
    this.route.navigate(['/ListeEtapes',this.id]);

  }
  onSubmit(){
    this.stepService.create(this.stepForm.value);
    this.route.navigate(['/Fiches',  this.id]);
  }

  /*createIngr(){
    return this.formBuilder.group({
      ingredient:['',Validators.required],
      quantite:['',Validators.required],
      unite:['']
    })
  }*/


  get listIngredient():FormArray{
    return this.stepForm.get('listIngredient') as FormArray;
  }

  /*addInput(){
    this.listIngredient.push(this.createIngr());
    this.listIngredient.controls.forEach((ing,index) =>{

    })
    this.stepService.updateListIngredient(this.stepForm.value.id,this.stepForm.get('listIngredient')?.value)
    console.log(this.stepForm.get('listIngredient')?.value);
    //this.nameIngrd = this.listIngredient.at(i).value.ingredient;
    //return this.nameIngrd;
  }*/


}
