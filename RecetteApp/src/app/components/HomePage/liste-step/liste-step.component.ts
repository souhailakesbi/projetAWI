import { Component, OnInit } from '@angular/core';
import {Step} from "../../../models/step/step";
import {StepServiceService} from "../../../services/step/step-service.service";
import Fiche from "../../../models/ficheTechnique/fiche";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-liste-step',
  templateUrl: './liste-step.component.html',
  styleUrls: ['./liste-step.component.css']
})
export class ListeStepComponent implements OnInit {
  steps!: Step[];
  listStep!:Array<Step>;
  fiche:Fiche;
  id : string | null;
  constructor(public stepService: StepServiceService,
  private route : Router,
  private act : ActivatedRoute) {
    this.fiche= new Fiche();
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
      this.listStep.push(step);
      console.log('Ajouter dans la liste')
      this.route.navigate([''])
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
