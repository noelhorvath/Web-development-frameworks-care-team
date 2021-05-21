import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {map, take} from "rxjs/operators";
import firebase from "firebase";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  email: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserEmail();
  }

  getUserEmail(): void{
    this.authService.getLoggedInUser().subscribe((user) =>{
      this.email = user.email;
    }, error => {
      console.log(error);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login')
  }
}
