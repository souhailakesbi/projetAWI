import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import { map } from 'rxjs/operators';
import {Ingredients} from "../../../models/ingredients";
import {ActivatedRoute, Router} from "@angular/router";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";
import {StepServiceService} from "../../../services/step/step-service.service";
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  Ingredients! : Ingredients[];
  listIngredient:Array<Ingredients> = new Array<Ingredients>();
  id: string | null;
  marked = false;
  constructor(private ingredientService : IngredientsService,private act : ActivatedRoute,
              private stepService: StepServiceService,
  private route:Router) {
    this.id= this.act.snapshot.paramMap.get('id');
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

  }

  removeIngredients(ingredients : Ingredients){
    if(confirm("are you sure to delete  "+ ingredients.libelle)){
      this.ingredientService.deleteIngredient(ingredients.id);
      console.log("Ingredient bien supprimé")
    }
    else{
      console.error();
    }
  }

  addIngredient(ingredient:Ingredients){
    if (confirm("Desirez-vous ajouter cette étape à votre recette?")){
      console.log(this.listIngredient);
      this.listIngredient.push(ingredient);
      this.stepService.updateListIngredient(this.id,this.listIngredient);
      console.log(this.listIngredient);
      console.log('Ajouter dans la liste')
      this.route.navigate(['Ingredients',this.id])
    }
  }
  visible(e: any){
    this.marked= e.target.checked;
  }
}

