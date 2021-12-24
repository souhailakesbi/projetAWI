import { Component, OnInit } from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/ajout-fiche.service";
import {error} from "@angular/compiler/src/util";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {
   public ficheForm! : FormGroup;
  constructor(
  public ficheService : AjoutFicheService,
  public formBuilder : FormBuilder,
  public router: Router
  ) {
    this.ficheForm = this.formBuilder.group({
      title: [''],
      materielDressage: [''],
      materielSpecifique: [''],
      nbCouverts: null,
      responsable:[''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ficheService.create(this.ficheForm.value);
    this.router.navigate(['AjouterEtape']);
  }

  /*saveFiche(){
    this.ficheService.create(this.fiche).then(
        () =>{
        console.log('Created sans étapes');
        this.submitted = true;
      }
    );
  }
  newFiche():void{
    this.submitted=false;
    this.fiche = new Fiche();
  }*/
}
