import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';

  formValues: { email: string; password: string } | null = null;

  guardarValores(): void {
    this.formValues = {
      email: this.email,
      password: this.password
    };
    
  }
}
