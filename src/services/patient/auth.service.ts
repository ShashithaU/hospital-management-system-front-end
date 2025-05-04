import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth/api/v1'; // Backend URL

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signUp`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signIn`, credentials);
  }
}