import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../services/authentification.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private authentificationService: AuthentificationService) { }

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
