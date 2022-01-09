import {Component, Input, OnInit} from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientsService} from "../../../services/ingredients.service";
import {ListeStepComponent} from "../liste-step/liste-step.component";
import {Step} from "../../../models/step/step";

@Component({
  selector: 'app-fiche-prix',
  templateUrl: './fiche-prix.component.html',
  styleUrls: ['./fiche-prix.component.css']
})
export class FichePrixComponent implements OnInit {

  @Input() fiche?:Fiche
  id : string | null;
  ingredientName! : string
  constructor(private ficheService: AjoutFicheService,
              private route : Router,
              private act : ActivatedRoute,
              private ingredientService:IngredientsService) {
    this.id = this.act.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.ficheService.getFicheDoc(this.id).subscribe(fiche =>{
      console.log(fiche);
      this.fiche = fiche;
    });
  }

  caculerCoutProduction(){
    let somme =0;
    let chargePersoetFluide=25;
    let coutProdu =0;
    this.fiche?.listeStep.forEach(Step=> {
      for(let i=0; i<Step.listIngredient.length ; i++) {
        somme += Step.listIngredient[i].prix_unitaire * Step.listQuantite[i]
      }
    })
    coutProdu = chargePersoetFluide + somme*1.05
    return coutProdu;
  }

  caculerPrixdeVente(){
    let coefficiant=2;
    let prixdevente =0;
    let coutProdu=this.caculerCoutProduction();
    prixdevente = coefficiant*coutProdu;
    return prixdevente;
  }

  caculerBenefice(){
    let prixdevente = this.caculerPrixdeVente();
    let coutProdu= this.caculerCoutProduction();
    let benefice  = prixdevente-coutProdu;
    return benefice;
  }
}
