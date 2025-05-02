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




  appointments: Appointment[] = [];
  isLoading: Boolean = false;
  error: string = '';
  selectedAppointment:Appointment = {
    id: 0,
    type: '',
    qr: '',
    dateTime: '',
    description: '',
    status: '',
    roomNumber: 0,
    q_Number: 0,
    patientId: 0,
    adminId: 0
  }

  appointmentService = inject(AppoimentService);

  ngOnInit(): void {
    this.loadAppointment();
  }

  loadAppointment() {
    this.isLoading = true;
    this.appointmentService.getAllAppointment().subscribe(
      (data) => {
        this.appointments = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Faild loading Appointments';
        this.isLoading = false;
        console.log(this.error);
      }
    );
  }

  deleteappointment(id: number): void {
    this.appointmentService.deleteappointment(id);
    this.loadAppointment();
  }

  editAppointment() {
   this.appointmentService.editAppointment(this.selectedAppointment)
    }

    selectAppointment(appoiment: Appointment) {
      this.selectedAppointment=appoiment;
      }
}
