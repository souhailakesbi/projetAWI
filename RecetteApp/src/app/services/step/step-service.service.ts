import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

import {Step} from "../../models/step/step";
import {Ingredients} from "../../models/ingredients";
import {FormArray} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StepServiceService {
  private listIngred: Ingredients[];
  private  dbPath = '/step'
  stepRef : AngularFirestoreCollection<Step>;

  constructor(private db: AngularFirestore) {
    this.stepRef = db.collection(this.dbPath);
    this.listIngred = [];
  }

  getStepDoc(id: string|null){
    return this.db.collection('step').doc(id!).valueChanges();
  }

  getStepList(){
    return this.db.collection('step').snapshotChanges();
  }

  updateListIngredient(id: string | null, listIngredient: FormArray){
    this.stepRef.doc(id!).update({listIngredient:listIngredient})
  }

  getAll() : AngularFirestoreCollection<Step>{
    return this.stepRef;
  }

  create(step:Step){
    return new Promise((resolve,reject) =>{
      this.db.collection('step').add(step).then(res => {
        console.log(res)
      }, error => reject(error));
    });
  }

  update(id:string, step:Step){
    return this.db.collection('step').doc(id).update({
      titleStep: step.titleStep,
      description: step.description,
      time:step.time
    });
  }

  delete(id:string){
    return this.db.collection('step').doc(id).delete();
  }
}
