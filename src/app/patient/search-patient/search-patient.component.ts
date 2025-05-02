import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { Patient } from '../../../models/patient.model';
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
  selectedPatient: number = 0;

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
    this.selectPatient = patient.id;
    this.searchTerm=patient.name;
    this.filteredPatients = [];
  }
}
