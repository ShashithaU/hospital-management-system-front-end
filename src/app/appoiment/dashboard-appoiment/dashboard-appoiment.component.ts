import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../../models/appointment.model';
import { AppoimentService } from '../../../services/patient/appointment.service';
import Swal from 'sweetalert2';
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
  selectedAppointment: Appointment = {
    id: 0,
    type: '',
    qr: '',
    dateTime: '',
    description: '',
    status: '',
    roomNumber: 0,
    q_Number: 0,
    patientId: 0,
    adminId: 0,
  };

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.appointmentService.deletePatient(id).subscribe({
          next: () => this.loadAppointment(),
          error: (err) => {
            this.error = 'Failed to delete patient.';
            console.error(err);
          },
        });
        this.loadAppointment();

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }

  editAppointment() {
    this.appointmentService
      .editAppointment(this.selectedAppointment)
      .subscribe({
        next: () => this.loadAppointment(),
        error: (err) => {
          this.error = 'Failed to edited patient.';
          console.error(err);
        },
      });
  }

  selectAppointment(appoiment: Appointment) {
    this.selectedAppointment = appoiment;
  }
}
