import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  isLoggedIn = false;

  constructor(public router: Router, public auth: AngularFireAuth) {
  }

  loginUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))
        //firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('Connecté');
        this.router.navigate(['/ListeRecettes']);
      }).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  logOut() {
    this.auth.signOut();
    localStorage.removeItem('user')
  }

  /*loginUser(email:string, password:string){
    return new Promise<void>(
      (resolve,reject) =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          () => {
            console.log('Connecté');
            resolve();
          }
        ).catch(
          (error) =>{
            reject(error);
          }
        );
    }
    );
  }*/
}
