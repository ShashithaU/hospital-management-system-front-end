import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Precription } from '../../../models/prescription';

@Component({
  selector: 'app-prescription-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prescription-search.component.html',
  styleUrl: './prescription-search.component.css',
})
export class PrescriptionSearchComponent {
  @Output() messageEvent = new EventEmitter<Precription[]>();

 
  searchTerm: string = 'Select Category';
  serchInput: string = '';
  searchResponse: Precription[] = [];

  constructor(private http: HttpClient) {}

  setSearchName(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  serchTerm() {
    if (this.serchInput === '') return;
    else {
      switch (this.searchTerm) {
        case 'Search By Doctor':
          this.http
            .get<Precription[]>(
              `http://localhost:8080/prescription/search-by-doctor/${this.serchInput}`
            )
            .subscribe({
              next: (response: Precription[]) => {
                this.searchResponse = response;
                console.log(response);
                    this.messageEvent.emit(this.searchResponse);

              },
            });
          break;

        case 'Search By Appointment':
          this.http
            .get<Precription[]>(
              `http://localhost:8080/prescription/search-by-appointment/${this.serchInput}`
            )
            .subscribe({
              next: (response: Precription[]) => {
                this.searchResponse = response;
                console.log(response);
                    this.messageEvent.emit(this.searchResponse);

              },
            });
          break;

        case 'Search By Date':
          this.http
            .get<Precription[]>(
              `http://localhost:8080/prescription/search-by-date/${this.serchInput}`
            )
            .subscribe({
              next: (response: Precription[]) => {
                this.searchResponse = response;
                console.log(response);
                    this.messageEvent.emit(this.searchResponse);

              },
            });
          break;

        case 'Search By Patient':
          this.http
            .get<Precription[]>(
              `http://localhost:8080/prescription/search-by-patient/${this.serchInput}`
            )
            .subscribe({
              next: (response: Precription[]) => {
                this.searchResponse = response;
                console.log(response);
                    this.messageEvent.emit(this.searchResponse);

              },
            });
          break;
      }
    }
  }
}
