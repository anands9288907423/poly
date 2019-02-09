import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logio:boolean;
  email: string;
  password: string;

  constructor(public authService: AuthService) {
    this.logio = false;
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }
  signInWithFacebook() {
    this.authService.signInWithFacebook();
  }
  logout() {
    this.authService.logout();
  }
  signInWithGoogle(){
    this.authService.signInWithGoogle();
  }
  signupbtn(){
    this.logio = true;
  }
  getuserst(){
    if(this.logio==true){
          return "new username";
    }
    else{
          return "username"
    }
  }
  ngOnInit() {
    
  }

}
