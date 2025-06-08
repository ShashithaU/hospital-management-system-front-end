import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Precription } from '../../../models/prescription';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prescription-view',
  standalone: true,
  imports: [],
  templateUrl: './prescription-view.component.html',
  styleUrl: './prescription-view.component.css',
})
export class PrescriptionViewComponent implements OnInit {
  ngOnInit(): void {
    this.loaddata();
  }

  constructor(private http: HttpClient) {}

  precriptions: Precription[] = [];
  isLoading: boolean = false;
  isError: boolean = false;
  apiUrl: string = 'http://localhost:8080/prescription/view-precriptions';
  deleteApiURL:string = "http://localhost:8080/prescription/"

  loaddata() {
    this.http.get<Precription[]>(this.apiUrl).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.precriptions = response;
        console.log(response);
      },

      error(error) {
        console.log(error);
      },
    });
  }
}
