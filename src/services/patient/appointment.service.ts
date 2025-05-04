import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../../models/appointment.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppoimentService {
  private apiUrl = `${environment.apiBaseUrl}/appointment`;

  constructor(private http: HttpClient) {}

  getAllAppointment(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/view-all-appointments`);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-appointment/${id}`)
  }

  editAppointment(appoiment: Appointment): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-appointment`,appoiment);
  }

  searchAppointmentByDate(date:string):Observable<any>{
    return this.http.get<Appointment[]>(`${this.apiUrl}/get-appointment-by-date/${date}`);
  }
}
