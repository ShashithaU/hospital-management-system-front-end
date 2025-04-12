import { Component } from '@angular/core';
import { AppointmentManageComponent } from "../../appointment/appointment-manage/appointment-manage.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AppointmentManageComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
