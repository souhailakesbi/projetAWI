import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../services/authentification.service";
import firebase from "firebase/compat";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  imgFileName:string = 'logo.png';
  constructor(private authentificationService: AuthentificationService,
              public afDB: AngularFireDatabase,
              public afSG: AngularFireStorage) { }

  ngOnInit(): void {

  }

  buttonLogoutForm() {

    try {
      this.authentificationService.logOut();
      console.log("Déconnexion réussi ");
    }catch (error){
      console.log("Déconnexion échoué ");
    }

  }

}
