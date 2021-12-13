import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {
  recipeId: number = 1;
  recipeName:String ='Tarte au citron';
  recipeResponsable:String ='Thomas';
  recipeNbCouverts:number =2;
  recipeCategorie:String = 'Dessert';

  constructor() { }

  ngOnInit(): void {
  }

}
