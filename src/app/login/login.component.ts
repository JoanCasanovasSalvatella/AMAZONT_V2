import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: FormGroup;
  correo: FormControl;
  contrasena: FormControl;
  constructor() {
    this.correo = new FormControl('', [Validators.required]);
    this.contrasena = new FormControl('', [Validators.required]);

    this.login = new FormGroup({
      correo: this.correo,
      contrasena: this.contrasena,
    });
  }
}
