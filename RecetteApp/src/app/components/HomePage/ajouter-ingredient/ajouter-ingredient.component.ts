import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import {Ingredients} from '../../../models/ingredients';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {StockService} from "../../../services/stock/stock.service";
import {CategorieIngredientService} from "../../../services/categorie/categorie-ingredient.service";
import {CategorieIngredient} from "../../../models/categorie_ingredient/categorie-ingredient";

@Component({
  selector: 'app-ajouter-ingredient',
  templateUrl: './ajouter-ingredient.component.html',
  styleUrls: ['./ajouter-ingredient.component.css']
})
export class AjouterIngredientComponent implements OnInit {

  ingredient: Ingredients = new Ingredients();
  submitted = false;
  categories!:CategorieIngredient[];
  public ingredientForm: FormGroup;
  constructor(
    public ingredientService : IngredientsService,

    public categorieIngredientService : CategorieIngredientService,
    public formBuilder : FormBuilder,
    public router : Router){
    this.categorieIngredientService.getAllCategorieIngredient().subscribe(
      res =>{
        this.categories = res.map(e => {
            return {
              idCategorieIngredient: e.payload.doc.id, ...e.payload.doc.data() as {}
            } as CategorieIngredient;
          }
        )
      }
    );
    this.ingredientForm = this.formBuilder.group({
      code :[''],
      libelle: [''],
      unite: [''],
      prix_unitaire: [''],
      categorie: ['']
    })
  }


  ngOnInit(): void {

  }

  onSubmit(){

    this.ingredientService.createIngredient(this.ingredientForm.value);
    this.router.navigate(['Ingredients'])
    console.log(this.ingredientForm.value)
    console.log("Ajout fait ")

  }



}
