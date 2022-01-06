import { Component, OnInit } from '@angular/core';
import {Step} from "../../../models/step/step";
import {StepServiceService} from "../../../services/step/step-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AjoutFicheService} from "../../../services/fiche/ajout-fiche.service";


@Component({
  selector: 'app-liste-step',
  templateUrl: './liste-step.component.html',
  styleUrls: ['./liste-step.component.css']
})
export class ListeStepComponent implements OnInit {
  steps!: Step[];
  listStep:Array<Step> = new Array<Step>();
  fiche!:void;
  id : string | null;
  constructor(public stepService: StepServiceService,
  private route : Router,
  private act : ActivatedRoute,
  private ficheService: AjoutFicheService) {
    this.id = this.act.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    console.log(this.id);
    this.stepService.getStepList().subscribe(
      res =>{
        this.steps = res.map(e => {
            return {
              idStep: e.payload.doc.id, ...e.payload.doc.data() as {}
            } as Step;
          }
        )
      }
    );

  }
  removeStep(step:Step){
    if(confirm("Desirez-vous supprimer cette étape?")+ step.titleStep){
      this.stepService.delete(step.idStep).then(r => {
        console.log("Step supprimée"+r);
      });
    }
  }

  addStep(step:Step){
    if(confirm("Desirez-vous ajouter cette étape à votre recette?")) {
      console.log(this.listStep)
      this.listStep.push(step);
      this.ficheService.updateListStep(this.id,this.listStep);
      console.log(this.listStep)
      console.log('Ajouter dans la liste')
      this.route.navigate(['ListeEtapes',this.id])
    }
  }

  modifyStep(step:Step){
    if (confirm("Desirez-vous modifier cette étape")){
      this.route.navigate(['Fiches', step.idStep]).then(r =>{
        console.log("fait"+r);
      });
    }
  }
}
