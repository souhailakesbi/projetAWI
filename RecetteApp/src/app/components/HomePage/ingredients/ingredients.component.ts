import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import { map } from 'rxjs/operators';
import {Ingredients} from "../../../models/ingredients";
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  Ingredients! : Ingredients[];


  constructor(private ingredientService : IngredientsService) { }
  ngOnInit() {
    this.ingredientService.getIngredientList().subscribe(res =>{
      this.Ingredients = res.map(c => {
        return{
          code: c.payload.doc.id, ...c.payload.doc.data() as {}
        } as Ingredients;
      })
    });

  }

  removeIngredients(ingredients : Ingredients){
    if(confirm("are you sure to delete"+ ingredients.libelle)){
      this.ingredientService.deleteIngredient(ingredients.code);
      console.log("Ingredient bien supprimé")
    }
    else{
      console.error();
    }
  }

/*

retrieveIngredients(): void {
    this.ingredientService.getIngredientList().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id,...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.Ingredients = data;
    });
  }
  ingredients: any;
  currentIngredient : null;
  currentIndex = -1;
  title = '';

  constructor(private ingredientService : IngredientsService) { }

  ngOnInit(): void {
    this.retrieveIngredients();
  }

  refreshList(): void {
    this.currentIngredient = null;
    this.currentIndex = -1;
    this.retrieveIngredients();
  }



  setActiveIngredient(ingredient: any, index: number): void {
    this.currentIngredient = ingredient;
    this.currentIndex = index;
  }
*/



}

