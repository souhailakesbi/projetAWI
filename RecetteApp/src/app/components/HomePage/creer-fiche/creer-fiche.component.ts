import { Component, OnInit } from '@angular/core';
import Fiche from "../../../models/fiche";
import {AjoutFicheService} from "../../../services/ajout-fiche.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {

  fiche: Fiche = new Fiche();
  submitted = false;
  message : string = "";
  constructor(
    private ficheService: AjoutFicheService
  ) { }

  ngOnInit(): void {
  }
  saveFiche(){
    this.ficheService.create(this.fiche).then(
        (res: any) =>{
        this.fiche.title = "";
        this.fiche.materielDressage = "";
        this.fiche.responsable = "";
        this.fiche.nbCouverts = 2;
        this.fiche.materielSpecifique = "";
        this.submitted = true;
        console.log(res);
        this.message= "Fiche sans étapes créée"
      }
    ).catch((error: any) => {
        console.log(error);
      }
    );
  }
  newFiche():void{
    this.submitted=false;
    this.fiche = new Fiche();
  }
}
