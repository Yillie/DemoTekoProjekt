import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterService } from './register.service';
import { Router, RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
    MatProgressSpinnerModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [RegisterService],
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationSuccess = false;
  registrationError = '';
  loading = false;

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.registerService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.registrationSuccess = true;
          this.registrationError = '';
          this.registerForm.reset();
          this.loading = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.registrationSuccess = false;
          this.registrationError = 'Registration failed. Please try again.';
        },
      });
    }
  }
}
