import { Component, OnInit } from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {
  fiches!: Fiche[];
  constructor(public ficheService : AjoutFicheService) { }

  ngOnInit(): void {
    this.ficheService.getFicheList().subscribe(res =>{
      this.fiches = res.map(e => {
        return{
          id: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as Fiche;
      })
    });
  }
  removeFiche(fiche:Fiche){
    if(confirm("Désirez-vous supprimer cette recettes ?"+ fiche.title)){
      this.ficheService.delete(fiche.id);
    }
  }
}
