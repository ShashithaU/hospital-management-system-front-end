import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { initFlowbite } from 'flowbite'
import { SlidebarComponent } from "./common/slidebar/slidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SlidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  ngOnInit(): void {
    initFlowbite();
  }
}


