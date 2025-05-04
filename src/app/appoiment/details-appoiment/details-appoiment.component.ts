import { Component, inject, OnInit } from '@angular/core';
import { Appointment } from '../../../models/appointment.model';
import Swal from 'sweetalert2';
import { AppoimentService } from '../../../services/patient/appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-appoiment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details-appoiment.component.html',
  styleUrl: './details-appoiment.component.css',
})
export class DetailsAppoimentComponent  {
  appointments: Appointment[] = [];
  isLoading: Boolean = false;
  error: string = '';
  isDateSet: Boolean = true;
  pickedDate = ""
  
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
    email:'',
  };

  appointmentService = inject(AppoimentService);

  

  loadAppointment() {
    this.isLoading = true;
    this.appointmentService.searchAppointmentByDate(this.pickedDate).subscribe(
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
