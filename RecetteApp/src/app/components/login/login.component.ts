import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../../services/authentification/authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService
  ) {
  }

  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm() {
    this._loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitLoginForm() {
    const email = this._loginForm.get('email')?.value;
    const password = this._loginForm.get('password')?.value;
    this.authentificationService.loginUser(email, password).then(
      () => {
        console.log('Okey');

      }
    ).catch(
      (error) => {
        console.log(error.code);
      }
    )
  }

}
