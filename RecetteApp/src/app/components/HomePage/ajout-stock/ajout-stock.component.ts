import {Component, Input, OnInit} from '@angular/core';
import { StockService } from '../../../services/stock/stock.service';
import {Stock} from '../../../models/stock/stock';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Ingredients} from "../../../models/ingredients";
import {IngredientsService} from "../../../services/ingredients.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-ajout-stock',
  templateUrl: './ajout-stock.component.html',
  styleUrls: ['./ajout-stock.component.css']
})
export class AjoutStockComponent implements OnInit {
  @Input() ingredient!: Ingredients;
  stock: Stock = new Stock();
  submitted = false;
  ingredients!:Ingredients[];
  ingredientService! : IngredientsService;

  public stockForm: FormGroup;
  constructor(
    public stockService : StockService,
    public formBuilder : FormBuilder,
    public router : Router){

    this.stockService.getAllIngredient().subscribe(
      res =>{
        this.ingredients = res.map(e => {
            return {
              id: e.payload.doc.id, ...e.payload.doc.data() as {}
            } as Ingredients;
          }
        )
      }
    );
    //this.stockService.getAllIngredient();
    this.stockForm = this.formBuilder.group({
      ingredient_stock: ['',Validators.required],
      quantite: ['',Validators.required],
      prix_total: ['',Validators.required]
    })
  }

  addIngredient(ingredient:Ingredients){
    this.stockForm.value.ingredient_stock= ingredient;
    console.log(ingredient);

  }


  ngOnInit(): void {
  }



  onSubmit(){

    this.stockService.createStock(this.stockForm.value);
    this.router.navigate(['Stock'])
    console.log("Ajout fait ")
  }


  getIngredient(id: string|null) {
    this.stockService.getIngredient(id);

  }


}
