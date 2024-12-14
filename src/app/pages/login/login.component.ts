import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  
  //Dependency Injection
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['dashboard', 1]) //Redirect to Home Page
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  // handleBasicAuthLogin() {
  //   // console.log(this.username);
  //   //if(this.username==="in28minutes" && this.password === 'dummy') {
  //   this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
  //       .subscribe(
  //         data => {
  //           console.log(data)
  //           this.router.navigate(['welcome', this.username])
  //           this.invalidLogin = false      
  //         },
  //         error => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  //       )
  // }

  // handleJWTAuthLogin() {
  //   this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
  //       .subscribe(
  //         data => {
  //           console.log(data)
  //           this.router.navigate(['welcome', this.username])
  //           this.invalidLogin = false
  //         },
  //         error => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  //       )
  // }

}