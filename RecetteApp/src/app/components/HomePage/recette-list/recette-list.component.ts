import { Component, OnInit } from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {
  fiches!: Fiche[];
  searchText: any;
  constructor(public ficheService : AjoutFicheService,
  private router: Router) {}


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
    if(confirm("Désirez-vous supprimer cette recettes ? "+ fiche.title)){
      this.ficheService.delete(fiche.id);
    }
  }

  selectFiche(fiche:Fiche){
    if(confirm("Voulez-vous les détails de cette recette ? "+ fiche.title)){
      this.router.navigate(['DetailsFiche', fiche.id])
    }
  }

  afficher(fiche:Fiche){
    if(confirm("Voulez-vous l'étiquette de cette recette ? "+ fiche.title)){
      this.router.navigate(['Etiquette', fiche.id])
    }
  }
}
