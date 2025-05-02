import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-appoiment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-appoiment.component.html',
  styleUrl: './add-appoiment.component.css',
})
export class AddAppoimentComponent implements OnInit {
  appointmentForm!: FormGroup;
  isLoading = false;
  submitted = false;
  apiUrl = `${environment.apiBaseUrl}/appointment/add-appointment`;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.appointmentForm = this.fb.group({
      type: ['', [Validators.required]],
      qr: ['', [Validators.required, Validators.minLength(3)]],
      dateTime: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      status: ['', [Validators.required]],
      roomNumber: ['', [Validators.required, ]],
      q_Number: ['', [Validators.required]],
      // patientId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      adminId: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.appointmentForm.invalid) {
      return;
    }

    const formData = {
      type: this.appointmentForm.value.type,
      qr: this.appointmentForm.value.qr,
      dateTime: this.appointmentForm.value.dateTime,
      description: this.appointmentForm.value.description,
      status: this.appointmentForm.value.status,
      roomNumber: this.appointmentForm.value.roomNumber,
      q_Number: this.appointmentForm.value.q_Number,
      // patientId: this.appointmentForm.value.patientId,
      adminId: this.appointmentForm.value.adminId,
    };

    this.http.post(this.apiUrl, formData).subscribe({
      next: (response) => {
        this.isLoading = false;

        this.appointmentForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
