import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  isMenuOpen = false;

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  shouldShowDashboardLink(): boolean {
    return this.authService.isUserLoggedIn() && !this.router.url.startsWith('/dashboard');
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
