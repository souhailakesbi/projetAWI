import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import {Ingredients} from '../../../models/ingredients';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-ajouter-ingredient',
  templateUrl: './ajouter-ingredient.component.html',
  styleUrls: ['./ajouter-ingredient.component.css']
})
export class AjouterIngredientComponent implements OnInit {

  ingredient: Ingredients = new Ingredients();
  submitted = false;

  public ingredientForm: FormGroup;
  constructor(
    public ingredientService : IngredientsService,
    public formBuilder : FormBuilder,
    public router : Router){
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
    console.log("Ajout fait ")

  }

  saveIngredient(): void {
    this.ingredientService.createIngredient(this.ingredient).then(() => {
      console.log('Création de ingredient réussi');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.ingredient = new Ingredients();
  }

}
