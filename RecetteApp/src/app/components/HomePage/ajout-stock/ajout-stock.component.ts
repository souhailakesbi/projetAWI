import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../services/stock/stock.service';
import {Stock} from '../../../models/stock/stock';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Ingredients} from "../../../models/ingredients";
import {IngredientsService} from "../../../services/ingredients.service";
@Component({
  selector: 'app-ajout-stock',
  templateUrl: './ajout-stock.component.html',
  styleUrls: ['./ajout-stock.component.css']
})
export class AjoutStockComponent implements OnInit {

  stock: Stock = new Stock();
  submitted = false;

  public stockForm: FormGroup;
  constructor(
    public stockService : StockService,
    public formBuilder : FormBuilder,
    public router : Router){
    this.stockForm = this.formBuilder.group({
      ingredient_stock :[''],
      quantite: [''],
      prix_total: ['']
    })
  }


  ngOnInit(): void {
  }

  onSubmit(){
    this.stockService.createStock(this.stockForm.value);
    this.router.navigate(['Stock'])
    console.log("Ajout fait ")

  }

  saveIngredient(): void {
    this.stockService.createStock(this.stock).then(() => {
      console.log('Création de ingredient réussi');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.stock = new Stock();
  }
}
