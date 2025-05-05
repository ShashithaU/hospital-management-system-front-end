import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/patient/auth.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Full response:', response);
          console.log('Token received:', response.result.token);
          localStorage.setItem('token', response.result.token);
          // Verify token was stored
          console.log('Stored token:', localStorage.getItem('token'));
          // Make a test request to see if interceptor works
          this.authService
            .testProtectedEndpoint()
            .subscribe((data) => console.log('Protected data:', data));
          this.errorMessage = '';
          Swal.fire({
            title: 'Login successful!',
            icon: 'success',
          });
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.errorMessage = 'Invalid email or password.';
        },
      });
    }
  }

  registerUser(){
    this.router.navigate(['/register']);
  }


}
