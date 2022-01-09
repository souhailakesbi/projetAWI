import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {StepServiceService} from "../../../services/step/step-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ListeStepComponent} from "../liste-step/liste-step.component";


@Component({
  selector: 'app-modification-etape',
  templateUrl: './modification-etape.component.html',
  styleUrls: ['./modification-etape.component.css']
})
export class ModificationEtapeComponent implements OnInit {
  public editStepForm!: FormGroup;
  idStep: string | null;
  stepRef:any;
  listStep: ListeStepComponent | undefined;

  constructor(
    private stepService: StepServiceService,
    private formBuilder:FormBuilder,
    private router: Router,
    private act:ActivatedRoute) {
    this.editStepForm = this.formBuilder.group({
      titleStep: [''],
      description:[''],
      time:['']
    })
    this.idStep = this.act.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.idStep);
    this.stepService.getStepDoc(this.idStep).subscribe(
      data=>{
        this.stepRef = data;
        this.editStepForm= this.formBuilder.group({
          titleStep: [this.stepRef.titleStep],
          description:[this.stepRef.description],
          time:[this.stepRef.time],
        });
        })
  }
  editStep(){
    console.log('Début de la modification')
    if(this.idStep!=null){
      this.stepService.update(this.idStep,this.editStepForm.value)
      console.log('Modifié')
    }
  }

  onSubmit(){
    if(this.idStep!=null){
      this.editStep();
      this.router.navigate(['ListeEtapes']);
      console.log('ETAPE  UPDATED');
    }
  }


}
