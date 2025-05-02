import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-patient.component.html',
  styleUrl: './search-patient.component.css',
})
export class SearchPatientComponent {
  searchTerm = '';
  filteredPatients: any[] = [];
  apiUrl = 'http://localhost:8080/patient/search-by-name/';
  selectedPatient: any = '';

  constructor(private http: HttpClient) {}

  onSearch() {
    if (this.searchTerm.length === 0) {
      this.filteredPatients = [];
      return;
    }
    this.http
      .get<any>(`${this.apiUrl}${this.searchTerm}`)
      .subscribe((data) => (this.filteredPatients = data));
    console.log(this.filteredPatients);
  }

  selectPatient(patient: any) {
    this.selectedPatient = patient;
    this.searchTerm = patient.name;
    this.filteredPatients = [];
  }
}
