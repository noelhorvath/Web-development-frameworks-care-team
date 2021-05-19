import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.minLength(6), Validators.required]),
    passwordAgain: new FormControl('',[Validators.minLength(6), Validators.required]),
    birthDate: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
  })

  alertMessage: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  cancel(){
    this.form.reset()
  }
  register() {
    if(this.form.invalid){
      return;
    }

    if(this.form.value.password === this.form.value.passwordAgain){
      this.authService.register(this.form.value.email, this.form.value.password).then(
        result =>{
          this.navTo('login')
        },
        error =>{
          this.alertMessage = error.message;
        }
      )
    }else{
      this.alertMessage = "Passwords are not matching!"
    }

  }
}
