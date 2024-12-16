import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  invalidLogin: boolean = false;

  errorMessage  = "Invalid credentials";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Create the form group and add form controls with validators
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Getters for form controls to simplify the template
  get f() {
    return this.form.controls;
  }


  handleLogin() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;


    if(this.authService.authenticate(this.f['username'].value, this.f['password'].value)) {
      this.router.navigate(['dashboard', 1]) //Redirect to Home Page
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
