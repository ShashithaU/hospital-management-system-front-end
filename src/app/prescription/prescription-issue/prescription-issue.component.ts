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
      doctorId: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.http.post(this.apiUrl, this.form.value).subscribe({
      next: (response) => {
        this.loading = false;
        this.form.reset();
        this.submitted = false;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
}
