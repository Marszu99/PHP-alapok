import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../adat.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    loginData = new Login();
    static IsLogged:boolean = false;  

  constructor( 
      private router: Router
      ){ }

  ngOnInit(): void {
  }

  login(): void{
      if(this.loginData.username.length >= 6 && this.loginData.password.length >= 6)//if(this.loginData.username != "login" &&  this.loginData.password != "login")
      {
        LoginComponent.IsLogged=true;
        this.router.navigateByUrl('/list');
        alert("Welcome back "+this.loginData.username+"!");
      }
      else alert("You have to fill out everything with atleast a 6 length word!");
      //else alert("The Username and the Password is: login ");
  }
}