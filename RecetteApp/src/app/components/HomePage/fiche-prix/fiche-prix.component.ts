import {Component, Input, OnInit} from '@angular/core';
import Fiche from "../../../models/ficheTechnique/fiche";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientsService} from "../../../services/ingredients.service";
import {ListeStepComponent} from "../liste-step/liste-step.component";
import {Step} from "../../../models/step/step";
import {CoutsService} from "../../../services/couts/couts.service";
import {Couts} from "../../../models/couts/couts";

@Component({
  selector: 'app-fiche-prix',
  templateUrl: './fiche-prix.component.html',
  styleUrls: ['./fiche-prix.component.css']
})
export class FichePrixComponent implements OnInit {

  @Input() fiche?:Fiche
  couts! : any;
  id : string | null;
  ingredientName! : string
  constructor(private ficheService: AjoutFicheService,
              private route : Router,
              private act : ActivatedRoute,
              private ingredientService:IngredientsService,
              private coutsService: CoutsService) {
    this.id = this.act.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.ficheService.getFicheDoc(this.id).subscribe(fiche =>{
      console.log(fiche);
      this.fiche = fiche;
    });
    this.coutsService.getCout("PTJG0sAHhTGgjjSjlFgw").subscribe(couts =>{
      console.log(couts);
      this.couts = couts;
    });
  }

  caculerCoutProduction(){
    let somme =0;
    let duree=0;

    let coutProdu =0;
    this.fiche?.listeStep.forEach(Step=> {
      for(var val in Step.listIngredient) {
        somme += Step.listIngredient[val].prix_unitaire * Step.listQuantite[val];
      }
      duree += Step.time;
    })
    let chargePersoetFluide = this.couts.coutFluide+this.couts.coutHorairePersonnel*duree;
    coutProdu = chargePersoetFluide + somme*1.05
    return coutProdu;
  }

  caculerPrixdeVente(){
    let coefficiant=this.couts.coefficiantVente;
    let prixdevente =0;
    let coutProdu=this.caculerCoutProduction();
    prixdevente =coefficiant *coutProdu;
    return prixdevente;
  }

  caculerBenefice(){
    let prixdevente = this.caculerPrixdeVente();
    let coutProdu= this.caculerCoutProduction();
    let benefice  = prixdevente-coutProdu;
    return benefice;
  }

  print(){
    window.print();
  }
}
