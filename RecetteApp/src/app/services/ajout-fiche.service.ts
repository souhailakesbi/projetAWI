import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import Fiche from '../models/fiche'
@Injectable({
  providedIn: 'root'
})
export class AjoutFicheService {
  private  dbPath = '/fiche'
   ficheRef : AngularFirestoreCollection<Fiche>;
  constructor(private db: AngularFirestore) {
    this.ficheRef = db.collection(this.dbPath);
  }

  getAll() : AngularFirestoreCollection<Fiche>{
    return this.ficheRef;
  }

  create(fiche:Fiche): any{

    return this.ficheRef.add(fiche);
  }

  update(id:string, data:any):Promise<void>{
    return this.ficheRef.doc(id).update(data);
  }

  delete(id:string):Promise<void>{
    return this.ficheRef.doc(id).delete();
  }

}
