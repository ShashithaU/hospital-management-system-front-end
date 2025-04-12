import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-root',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './patient-root.component.html',
  styleUrl: './patient-root.component.css'
})
export class PatientRootComponent {

}
