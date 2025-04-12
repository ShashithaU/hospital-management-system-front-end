import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { SlideBarComponent } from "./common/slide-bar/slide-bar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SlideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Hostpital-Manege-front-end';
  ngOnInit(): void {
    initFlowbite();
  }
}
