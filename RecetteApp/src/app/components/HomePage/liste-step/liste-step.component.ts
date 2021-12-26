import { Component, OnInit } from '@angular/core';
import {Step} from "../../../models/step/step";
import {StepServiceService} from "../../../services/step/step-service.service";
import Fiche from "../../../models/ficheTechnique/fiche";

@Component({
  selector: 'app-liste-step',
  templateUrl: './liste-step.component.html',
  styleUrls: ['./liste-step.component.css']
})
export class ListeStepComponent implements OnInit {
  steps!: Step[];
  listStep!:Array<Step>;
  fiche:Fiche;
  constructor(public stepService: StepServiceService) {
    this.fiche= new Fiche();
  }
  ngOnInit(): void {
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
      this.stepService.delete(step.idStep);
    }
  }

  addStep(step:Step){
    if(confirm("Desirez-vous ajouter cette étape à votre recette?")) {
      this.listStep.push(step);
    }
  }
}
