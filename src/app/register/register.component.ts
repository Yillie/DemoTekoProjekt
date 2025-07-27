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
import { RegisterBackendService } from './register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [RegisterBackendService],
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationSuccess = false;
  registrationError = '';

  constructor(
    private registerService: RegisterBackendService,
    private fb: FormBuilder
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
      this.registerService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.registrationSuccess = true;
          this.registrationError = '';
          this.registerForm.reset();
        },
        error: (err) => {
          this.registrationSuccess = false;
          this.registrationError = 'Registration failed. Please try again.';
        },
      });
    }
  }
}
