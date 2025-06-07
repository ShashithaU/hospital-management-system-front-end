import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-precription-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './precription-root.component.html',
  styleUrl: './precription-root.component.css'
})
export class PrecriptionRootComponent {

}
