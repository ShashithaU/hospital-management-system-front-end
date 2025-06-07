import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-prescription-issue',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './prescription-issue.component.html',
  styleUrl: './prescription-issue.component.css',
})
export class PrescriptionIssueComponent implements OnInit {
  ngOnInit(): void {
    this.initializeForm();
  }

  form!: FormGroup;
  submitted = false;
  loading = false;
  apiUrl = 'http://localhost:8080/prescription/issue-precription';

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  initializeForm() {
    this.form = this.fb.group({
     type: ['', [Validators.required]], // Add validators
    dateTime: ['', [Validators.required]],
    patientId: ['', [Validators.required]],
    adminId: ['', [Validators.required]],
    description: [''], // Optional field
    patientStatus: ['', [Validators.required]],
    status: ['', [Validators.required]],
    });
  }
  

  onsubmit() {
  console.log('📋 Raw form values:', this.form.value);
  
  this.submitted = true;
  
  if (this.form.invalid) {
    console.log('❌ Form is invalid:', this.form.errors);
    
    // Log which fields are invalid
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      if (control?.invalid) {
        console.log(`❌ Invalid field: ${key}`, control.errors);
      }
    });
    return;
  }
  
  this.loading = true;

  const formdata = { ...this.form.value }; // Simplified
  console.log('📤 Sending data:', formdata);

  this.http.post(this.apiUrl, formdata).subscribe({
    next: (response) => {
      console.log('✅ Success response:', response);
      this.loading = false;
      this.form.reset();
      this.submitted = false;
    },
    error: (error) => {
      console.log('❌ Error:', error);
      this.loading = false;
    },
  });
}
}
