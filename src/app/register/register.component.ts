import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registro: FormGroup;
  nombre: FormControl;
  correo: FormControl;
  contrasena: FormControl;
  repetirContrasena: FormControl;

  constructor() {
    this.nombre = new FormControl('', [Validators.required]);
    this.correo = new FormControl('', [Validators.required, Validators.email]);
    this.contrasena = new FormControl('', [Validators.required]);
    this.repetirContrasena = new FormControl('', [Validators.required]);

    this.registro = new FormGroup({
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena,
      repetirContrasena: this.repetirContrasena
    });
  }
}
