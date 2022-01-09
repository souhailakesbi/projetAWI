import { Component, OnInit } from '@angular/core';
import{CoutsService} from "../../../services/couts/couts.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IngredientsService} from "../../../services/ingredients.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-couts',
  templateUrl: './couts.component.html',
  styleUrls: ['./couts.component.css']
})
export class CoutsComponent implements OnInit {

  public editForm : FormGroup;
  coutsRef:any;
  idCout:string |null;
  constructor(
    public coutService : CoutsService,
    public formBuilder : FormBuilder,
    public act : ActivatedRoute,
    public router : Router){
    this.editForm = this.formBuilder.group({
      coutHorairePersonnel: [''],
      coefficiantVente: [''],
      coutFluide: ['']

    })
    this.idCout= this.act.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {

  }

  update(){
    if(this.idCout!=null){
      this.coutService.getCout(this.idCout).subscribe(d=>{
        this.editForm = this.formBuilder.group({
          idCout : [this.idCout],
          coutHorairePersonnel :[this.editForm.value.coutHorairePersonnel],
          coefficiantVente: [this.editForm.value.coefficiantVente],
          coutFluide: [this.editForm.value.coutFluide]
        })
      });
     this.coutService.update(this.idCout,this.editForm.value);
      console.log("modification cout")

    }
    else{
      console.log(this.idCout)
    }
  }


  onSubmit(){
    this.coutService.createCout(this.editForm.value).then(res=>{
      // @ts-ignore
      console.log(res.idCout);
    })//ajout
    this.router.navigate(['/Couts',this.editForm.value.idCout]);
    console.log("cout  AJOUTE");


  }

}
