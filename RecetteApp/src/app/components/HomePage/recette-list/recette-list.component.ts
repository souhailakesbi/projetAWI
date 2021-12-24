import { Component, OnInit } from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/ajout-fiche.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {
  fiches?: Fiche[];
  currentFiche?: Fiche;
  currentIndex = -1;
  title:String ='';
  /*recipeResponsable:String ='';
  recipeNbCouverts:number =2;
  recipeCategorie:String = 'Dessert';*/

  constructor(
    public ficheService : AjoutFicheService
  ) { }

  ngOnInit(): void {
    this.retrieveFiche();
  }
  retrieveFiche(): void{
    this.ficheService.getAll().snapshotChanges().pipe(
      map(changes =>
      changes.map(c =>
        ({id: c.payload.doc.id, ...c.payload.doc.data()})
      )
      )
    ).subscribe(data => {
      this.fiches = data;
    });
  }

  setActiveFiche(fiche: Fiche, index: number):void{
    this.currentFiche = fiche;
    this.currentIndex = index
  }
}
