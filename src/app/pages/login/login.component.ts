import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required])
  })
  alertMessage: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value.email, this.form.value.password).then(
      result => {
        // navigate to home
      },
      error => {
        if (error.code === 'auth/user-not-found') {
          this.alertMessage = "This email is not registered!"
        } else if(error.code === 'auth/wrong-password'){
          this.alertMessage = "Wrong password!"
        } else{
          this.alertMessage = "Service is unavailable at the moment!"
        }
      }
    )


  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
