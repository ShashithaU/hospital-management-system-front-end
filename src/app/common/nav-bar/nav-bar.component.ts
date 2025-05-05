import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/patient/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }
  checkUserDetails(){
    this.getUserInfo();
  }
 
  getUserInfo(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // Only use token extraction for now
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log("Decoded payload:", payload); 
        
        this.userEmail = payload.sub;
        this.userName = `${payload.firstName} ${payload.lastName}`
        this.isLoggedIn = true;
        
      } catch (e) {
        console.error('Error decoding token:', e);
      }
    }
  }
  
  logout(){
    this.authService.logout();
    this.userName = '';
    this.userEmail = '';
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}

