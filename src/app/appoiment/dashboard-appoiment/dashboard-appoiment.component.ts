import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { AppoimentService } from '../../../services/patient/appointment.service';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../../models/appointment.model';

@Component({
  selector: 'app-dashboard-appoiment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard-appoiment.component.html',
  styleUrl: './dashboard-appoiment.component.css',
})
export class DashboardAppoimentComponent implements OnInit {
  appointment: Appointment[] = [];
  isLoading: Boolean = false;
  error: string = '';

  appointmentService = inject(AppoimentService);

  ngOnInit(): void {
    this.loadAppointment();
  }

  loadAppointment() {
    this.isLoading = true;
    this.appointmentService.getAllAppointment().subscribe(
      (data) => {
        this.appointment = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Faild loading Appointments';
        this.isLoading = false;
        console.log(this.error);
      }
    );
  }
}
