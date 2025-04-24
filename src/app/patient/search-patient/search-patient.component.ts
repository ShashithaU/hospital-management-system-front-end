import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-patient',
  standalone: true,
  imports: [MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  CommonModule],
  templateUrl: './search-patient.component.html',
  styleUrl: './search-patient.component.css'
})
export class SearchPatientComponent implements OnInit {
  searchControl = new FormControl();
  filteredPatients!: Observable<any[]>;
  apiUrl = 'http://localhost:8080/patient/search-by-name/'; // Update with your API URL

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.filteredPatients = this.searchControl.valueChanges.pipe(
      debounceTime(300), // wait 300ms after each keystroke
      distinctUntilChanged(), // ignore if same as previous value
      switchMap(term => term ? this.searchPatients(term) : [])
    );
  }

  searchPatients(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${term}`);
  }

  displayFn(patient: any): string {
    return patient && patient.fullName ? patient.fullName : '';
  }
}