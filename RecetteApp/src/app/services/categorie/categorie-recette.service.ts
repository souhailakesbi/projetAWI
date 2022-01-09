

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Observable} from "rxjs";
import {CategorieRecette} from "../../models/categorie_recette/categorie-recette";

@Injectable({
  providedIn: 'root'
})

export class CategorieRecetteService {

  private dbPath = 'categorie-recette';

  public angularFirebase: AngularFirestoreCollection<CategorieRecette> ;
  constructor(private db: AngularFirestore) {
    this.angularFirebase = db.collection(this.dbPath);
  }

  getAllCategorieRecette(){
    return this.db.collection('categorie-recette').snapshotChanges();
    console.log("arrivé sur liste getAllRecette dans stock service ");
  }

  getCategorieRecette(id: string|null) : Observable<any>{
    return this.db.collection('categorie-recette').doc(id!).valueChanges();
    console.log("arrivé sur getCategorieRecette ")
  }



}
