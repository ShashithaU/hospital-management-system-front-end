import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { SlideBarComponent } from './common/slide-bar/slide-bar.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SlideBarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Hostpital-Manege-front-end';
  isPublicRoute = false;
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    // Initialize Flowbite
    initFlowbite();
    
    // Check initial route
    this.checkIfPublicRoute(this.router.url);
    
    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.checkIfPublicRoute(event.urlAfterRedirects);
    });
  }
  
  checkIfPublicRoute(url: string) {
    // List all your public routes here
    this.isPublicRoute = 
      url.includes('/login') || 
      url.includes('/register') ||
      url === '/';
  }
}