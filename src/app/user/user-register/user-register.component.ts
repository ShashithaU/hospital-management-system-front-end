import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/patient/auth.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {



  registerForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService , private router :Router) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['USER', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // this.successMessage = 'Registration successful!';
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration successful!",
            showConfirmButton: false,
            timer: 1500
          });
          this.errorMessage = '';
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
          this.successMessage = '';
        },
      });
    }
  }
}