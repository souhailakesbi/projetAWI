import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import Fiche from '../../models/ficheTechnique/fiche'
import {Router} from "@angular/router";
import {Step} from "../../models/step/step";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AjoutFicheService {
  private  dbPath = '/fiche'
   ficheRef : AngularFirestoreCollection<Fiche>;
  private listStep: Step[] ;
  fiche!: Observable<Fiche>;
  constructor(private db: AngularFirestore,
  public router: Router) {
    this.ficheRef = db.collection(this.dbPath);
    this.listStep = [];

  }

  getFicheDoc(id: string|null){
    // @ts-ignore    //c'est sale -> à refaire
    this.fiche = this.db.collection('fiche').doc(id).valueChanges();
    return this.fiche;
  }

  updateListStep(id:string|null, listStep:Step[]){

    this.ficheRef.doc(id!).update({listeStep: listStep});
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
        console.log(res.id);
        this.router.navigate(['ListeEtapes',res.id]);
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

  delete(id: string | null){
    return this.db.collection('fiche').doc(id!).delete();
  }

}
