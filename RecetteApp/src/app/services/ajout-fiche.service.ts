import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import Fiche from '../models/ficheTechnique/fiche'
@Injectable({
  providedIn: 'root'
})
export class AjoutFicheService {
  private  dbPath = '/fiche'
   ficheRef : AngularFirestoreCollection<Fiche>;
  constructor(private db: AngularFirestore) {
    this.ficheRef = db.collection(this.dbPath);
  }

  getFicheDoc(id: string | undefined){
    return this.db.collection('fiche').doc(id).valueChanges();
  }
  getFicheList(){
    return this.db.collection('fiche').snapshotChanges();
  }
  getAll() : AngularFirestoreCollection<Fiche>{
    return this.ficheRef;
  }

  create(fiche:Fiche){
    return new Promise((resolve,reject) =>{
      this.db.collection('fiche').add(fiche).then(res => {
        console.log(res)
      }, error => reject(error));
    });
  }

  update(id:string, fiche:Fiche){
    return this.db.collection('fiche').doc(id).update({
      title: fiche.title,
      materielDressage: fiche.materielDressage,
      materielSpecifique: fiche.materielSpecifique,
      nbCouverts: fiche.nbCouverts,
      responsable: fiche.responsable
    });
  }

  delete(id:string){
    return this.db.collection('fiche').doc(id).delete();
  }

}
