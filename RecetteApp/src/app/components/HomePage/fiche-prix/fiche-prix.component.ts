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

  coutsList! : Couts[];
  //idCout : string |null;
  ingredientName! : string
  constructor(private ficheService: AjoutFicheService,
              private route : Router,
              private act : ActivatedRoute,
              private ingredientService:IngredientsService,
              private coutsService: CoutsService) {
    this.id = this.act.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.coutsService.getCoutList().subscribe(res =>{
      this.coutsList = res.map(c => {
        return{
          idCout: c.payload.doc.id, ...c.payload.doc.data() as {}
        } as Couts;
      })
    });
    this.ficheService.getFicheDoc(this.id).subscribe(fiche =>{
      console.log(fiche);
      this.fiche = fiche;
    });
    console.log(this.coutsList)
    /*this.coutsService.getCout(this.coutsList.).subscribe(couts =>{
      console.log(couts);
      this.couts = couts;
    });*/
  }

  caculerCoutProduction(){
    let somme =0;
    let duree=0;

    let coutProdu =0;
    this.fiche!.listeStep.forEach(Step=> {
      for(var val in Step.listIngredient) {
        somme += Step.listIngredient[val].prix_unitaire * Step.listQuantite[val];
      }
      duree += Step.time;
    })

    console.log(this.couts.coutHorairePersonnel);

    let chargePersoetFluide = this.couts.coutFluide+this.couts.coutHorairePersonnel*duree;

    console.log(this.couts.coutHorairePersonnel);
    coutProdu = chargePersoetFluide + somme*1.05
    return coutProdu;
    console.log(chargePersoetFluide);
  }

  caculerPrixdeVente(){
    let coefficiant=this.couts.coefficiantVente;
    let prixdevente =0;
    let coutProdu=this.caculerCoutProduction();
    prixdevente =coefficiant *coutProdu;
    return prixdevente;
    console.log(prixdevente);
  }

  caculerBenefice(){
    let prixdevente = this.caculerPrixdeVente();
    let coutProdu= this.caculerCoutProduction();
    let benefice  = prixdevente-coutProdu;
    return benefice;
    console.log(benefice);
  }

  print(){
    window.print();
  }
}
