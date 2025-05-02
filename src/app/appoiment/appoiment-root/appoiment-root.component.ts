import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appoiment-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './appoiment-root.component.html',
  styleUrl: './appoiment-root.component.css'
})
export class AppoimentRootComponent {

}
