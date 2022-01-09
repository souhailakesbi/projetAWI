import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private  router: Router, public auth: AngularFireAuth) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
    return new Promise(
      (resolve,reject) => {
        this.auth.onAuthStateChanged(
          (user) =>{
            if (user){
              resolve(true);
            }else {
              this.router.navigate(['/auth','Login'])
              resolve(false);
            }
          }
        );
      }
    );
  }
}
