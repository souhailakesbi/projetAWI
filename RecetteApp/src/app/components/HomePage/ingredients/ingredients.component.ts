import {Component, Input, OnInit} from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import { map } from 'rxjs/operators';
import {Ingredients} from "../../../models/ingredients";
import {CategorieIngredientService} from "../../../services/categorie/categorie-ingredient.service";
import {CategorieIngredient} from "../../../models/categorie_ingredient/categorie-ingredient";

import {ActivatedRoute, Router} from "@angular/router";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";
import {StepServiceService} from "../../../services/step/step-service.service";
import {QuantiteIngredient} from "../../../models/quantite_ingredient/quantite-ingredient"
import {Step} from "../../../models/step/step";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() step?:Step;
  Ingredients! : Ingredients[];
  searchText: any;
  Categories!:CategorieIngredient[];
  Filtre: string ="Cremerie";

  listIngredient : Array<Ingredients> = new Array<Ingredients>();
  listQtite: Array<number> = new Array<number>();
  id: string | null;
  marked = false;
  public quantiteForm! : FormGroup;
  constructor(private ingredientService : IngredientsService,private act : ActivatedRoute,
              private stepService: StepServiceService,
              public formBuilder : FormBuilder,private  categorieService : CategorieIngredientService,
  private route:Router) {
    this.id= this.act.snapshot.paramMap.get('id');
    this.quantiteForm = this.formBuilder.group({
      quantite:['']
    })
  }


  ngOnInit() {
    console.log(this.id)
    this.ingredientService.getIngredientList().subscribe(res =>{
      this.Ingredients = res.map(c => {
        return{
          id: c.payload.doc.id, ...c.payload.doc.data() as {}
        } as Ingredients;
      })
    });
    this.stepService.getStepDoc(this.id).subscribe(res=>{
      console.log(res);
      this.step = res;
    })

    this.categorieService.getAllCategorieIngredient().subscribe(res =>{
      this.Categories = res.map(c => {
        return{
          idCategorieIngredient: c.payload.doc.id, ...c.payload.doc.data() as {}
        } as CategorieIngredient;
      })
    });


  }

  removeIngredients(ingredients : Ingredients){
    if(confirm("are you sure to delete  "+ ingredients.libelle)){
      this.ingredientService.deleteIngredient(ingredients.id);
      console.log("Ingredient bien supprim??")
    }
    else{
      console.error();
    }
  }

  addIngredient(ingredient: Ingredients){
    if (confirm("Desirez-vous ajouter cette ??tape ?? votre recette?")){
      console.log(this.listIngredient);
      this.listIngredient.push(ingredient);
      console.log(this.listIngredient);
      this.stepService.updateListIngredient(this.id,this.listIngredient);

      console.log(this.listIngredient);

      console.log('Ajouter dans la liste')
      this.route.navigate(['Ingredients',this.id])
    }
  }

  addQuantite(){
    this.listQtite.push(this.quantiteForm.get('quantite')?.value)
    console.log(this.listQtite);
    this.stepService.updateListQuantite(this.id,this.listQtite);
    console.log(this.listQtite);
  }
  visible(e: any){
    this.marked= e.target.checked;
  }
}

