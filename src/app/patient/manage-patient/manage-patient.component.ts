import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../../services/patient/patient.service';

@Component({
  selector: 'app-manage-patient',
  standalone: true,
  imports: [],
  templateUrl: './manage-patient.component.html',
  styleUrl: './manage-patient.component.css',
})

export class ManagePatientComponent implements OnInit {
  patients: Patient[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.error = null;
    this.isLoading = true;

    this.patientService.getAllPatients().subscribe(
      (data) => {
        this.patients = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = 'Failed to load patients. Please try again later.';
        this.isLoading = false;
        console.error('Error fetching patients:', error);
      }
    );
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id)
    this.loadPatients();
  }
}
