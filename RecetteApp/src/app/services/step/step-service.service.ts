import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

import {Step} from "../../models/step/step";
import {Ingredients} from "../../models/ingredients";
import {FormArray} from "@angular/forms";

import {Router} from "@angular/router";
import {QuantiteIngredient} from "../../models/quantite_ingredient/quantite-ingredient";
import {Observable} from "rxjs";
import Fiche from "../../models/ficheTechnique/fiche";


@Injectable({
  providedIn: 'root'
})
export class StepServiceService {
  private listIngred: Ingredients[];
  private  dbPath = '/step'
  stepRef : AngularFirestoreCollection<Step>;
  step!: Observable<Step>;
  constructor(private db: AngularFirestore, private router: Router) {
    this.stepRef = db.collection(this.dbPath);
    this.listIngred = [];
  }

  getAllIngredient(){
    return this.db.collection('ingredients').snapshotChanges();
    console.log("arrivé sur liste getAllIngrredeint dans stock service ");
  }

  getIngredient(id: string|null) : Observable<any>{
    return this.db.collection('ingredients').doc(id!).valueChanges();
    console.log("arrivé sur getingredient stock")
  }


  getStepDoc(id: string|null){
    // @ts-ignore
    this.step =this.db.collection('step').doc(id!).valueChanges();
    return this.step;
  }

  getStepList(){
    return this.db.collection('step').snapshotChanges();
  }

  updateListIngredient(id: string | null, listIngredient: Ingredients[]){
    this.stepRef.doc(id!).update({listIngredient: listIngredient})
  }
  updateListQuantite(id: string | null, listQtite: number[]){
    this.stepRef.doc(id!).update({listQuantite: listQtite})
  }

  getAll() : AngularFirestoreCollection<Step>{
    return this.stepRef;
  }

  create(step:Step){
    return new Promise((resolve,reject) =>{
      this.db.collection('step').add(step).then(res => {
        console.log(res.id)
        this.router.navigate(['Ingredients',res.id]);
      }, error => reject(error));
    });
  }

  update(id:string, step:Step){
    return this.db.collection('step').doc(id).update({
      titleStep: step.titleStep,
      description: step.description,
      time:step.time,
      listIngredient:step.listIngredient
    });
  }

  delete(id:string){
    return this.db.collection('step').doc(id).delete();
  }
}
