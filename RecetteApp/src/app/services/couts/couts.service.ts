import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import Fiche from '../../models/ficheTechnique/fiche'
import {Router} from "@angular/router";
import {Couts} from "../../models/couts/couts";
import {Observable} from "rxjs";
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

  update(id:string, couts:Couts){
    return this.db.collection('couts').doc(id).update({
      coutHorairePersonnel: couts.coutHorairePersonnel,
      coefficiantVente: couts.coefficiantVente,
      coutFluide: couts.coutFluide
    });
  }



}
