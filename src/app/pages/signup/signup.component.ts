import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  username = '';
  password = '';
  successMessage = ''

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  handleSignUp() {
    if (this.username && this.password) {
      this.successMessage = "Signup Successful, please login"
      // alert('You have successfully signed up!');
      // this.router.navigate(['login'])
    }
  }
}
