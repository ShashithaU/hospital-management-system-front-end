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

  // Add this method to test if the interceptor works
  testProtectedEndpoint(): Observable<any> {
    // Replace with an actual protected endpoint from your API
    return this.http.get(`${this.baseUrl}/user-details`);
  }
}