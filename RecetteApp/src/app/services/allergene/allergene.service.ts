import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Stock} from '../../models/stock/stock';
import {Observable} from "rxjs";
import {Ingredients} from "../../models/ingredients";
import {Allergene} from "../../models/allergene/allergene";

import {IngredientsComponent} from "../../components/HomePage/ingredients/ingredients.component";
@Injectable({
  providedIn: 'root'
})

export class AllergeneService {

  private dbPath = 'Allergène';

  public angularFirebase: AngularFirestoreCollection<Allergene> ;
  constructor(private db: AngularFirestore) {
    this.angularFirebase = db.collection(this.dbPath);
  }

  getAllAllergene(){
    return this.db.collection('Allergène').snapshotChanges();
    console.log("arrivé sur liste get allallergene dans allergene service ");
  }

  getAllergene(id: string|null) : Observable<any>{
    return this.db.collection('Allergène').doc(id!).valueChanges();
    console.log("arrivé sur liste get allergene dans allergene service ");
  }



}
