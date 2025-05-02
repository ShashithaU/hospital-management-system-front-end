import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css',
})
export class AddPatientComponent {
  patientForm: FormGroup;
  submitted = false;
  loading = false;
  apiUrl = 'http://localhost:8080/patient/add-patient';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.patientForm = this.fb.group({
      fullName: ['', Validators.required],
      nic: ['', Validators.required],
      age: ['', Validators.required],
      bloodGroup: [''],
      patientCategory: [''],
      phone: ['', Validators.required],
      gender: ['Male', Validators.required],
      address: [''],
      note: [''],
      allergies: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      termsAgreement: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.patientForm.invalid) {
      return;
    }

    this.loading = true;

    // Prepare form data for API
    const formData = {
      name: this.patientForm.value.fullName,
      nic: this.patientForm.value.nic,
      age: this.patientForm.value.age,
      bloodGroup: this.patientForm.value.bloodGroup,
      category: this.patientForm.value.patientCategory,
      contact: this.patientForm.value.phone,
      gender: this.patientForm.value.gender,
      address: this.patientForm.value.address,
      note: this.patientForm.value.note,
      allergies: this.patientForm.value.allergies,
      email: this.patientForm.value.email,
      termsAgreed: this.patientForm.value.termsAgreement,
      // Add any other fields your API expects
    };

    // Submit to API
    this.http.post(this.apiUrl, formData).subscribe({
      next: (response) => {
        console.log('Patient added successfully!', response);
        this.loading = false;
        // Reset form after successful submission
        this.patientForm.reset();
        this.submitted = false;
        // You might want to navigate elsewhere or show a success message
      },
      error: (error) => {
        console.error('Error adding patient:', error);
        this.loading = false;
        // Show error message to user
      },
    });
  }
}
