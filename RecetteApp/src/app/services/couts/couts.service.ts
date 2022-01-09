import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import Fiche from '../../models/ficheTechnique/fiche'
import {Router} from "@angular/router";
import {Couts} from "../../models/couts/couts";
import {Observable} from "rxjs";
import {Ingredients} from "../../models/ingredients";
@Injectable({
  providedIn: 'root'
})
export class CoutsService {
  private  dbPath = '/couts'
  coutsRef : AngularFirestoreCollection<Couts>;

  fiche!: Observable<Fiche>;
  constructor(private db: AngularFirestore,
              public router: Router) {
    this.coutsRef = db.collection(this.dbPath);
  }

  getCoutList(){
    return this.db.collection('couts').snapshotChanges();
  }
  getCout(idCout:string){
    return this.db.collection('couts').doc(idCout).snapshotChanges();
  }


  createCout(couts : Couts){
    return new Promise((resolve , reject) =>{
        this.db.collection('couts').add(couts).then(response => {
          console.log(response);
        }, error=> reject(error));
      }

    );
  }
  update(id:string, couts:Couts){
    return this.db.collection('couts').doc(id).update({
      coutHorairePersonnel: couts.coutHorairePersonnel,
      coefficiantVente: couts.coefficiantVente,
      coutFluide: couts.coutFluide
    });
  }



}
