import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Patient } from "../../models/patient.model";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    private apiUrl = `${environment.apiBaseUrl}/patient`;

    constructor(private http:HttpClient){}

    getAllPatients() :Observable<Patient[]> {
        console.log('Getting patients, token:', localStorage.getItem('token'));
        return this.http.get<Patient[]>(`${this.apiUrl}/get-all`);
    }

    deletePatient(id:number){
        console.log('Getting patients, token:', localStorage.getItem('token'));
        this.http.delete(`${this.apiUrl}/delete-by-id/${id}`).subscribe(data => this.getAllPatients());
    }

    editPatient(patient:Patient){
        this.http.put(`${this.apiUrl}/update`,patient).subscribe(data=>{"Patient updated"})
    }
}