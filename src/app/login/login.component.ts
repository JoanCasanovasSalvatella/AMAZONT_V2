import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AmazontService } from '../services/amazont.service';
import { correoNoExisteValidator } from '../validators/validarCorreo-validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: FormGroup;
  correo: FormControl;
  contrasena: FormControl;

  mensajeEstado: string = '';

  constructor(private amazontService: AmazontService, private router: Router) {
    this.correo = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)], [correoNoExisteValidator(this.amazontService)]);
    this.contrasena = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]);

    this.login = new FormGroup({
      correo: this.correo,
      contrasena: this.contrasena,
    });
  }

  loginUser() {
    this.amazontService.loginUser(this.login.value.correo, this.login.value.contrasena).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error al iniciar sesion', err);
        this.mensajeEstado = 'Error al iniciar sesion';
      }
    });
  }
}
