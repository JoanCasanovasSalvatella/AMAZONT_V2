import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AmazontService } from '../services/amazont.service';
import { contrasenaFuerte } from '../validators/contrasena-validator';
import { correoExisteValidator } from '../validators/verificarCorreo-validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registro: FormGroup;
  nombre: FormControl;
  correo: FormControl;
  contrasena: FormControl;
  repetirContrasena: FormControl;
  rol: FormControl;

  mensajeEstado: string = '';

  coincidenContrasenas: boolean = false;

  constructor(private amazontService: AmazontService, private router: Router) {
    this.nombre = new FormControl('', [Validators.required, Validators.maxLength(100)]);
    this.correo = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)], [correoExisteValidator(this.amazontService)]);
    this.contrasena = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8), contrasenaFuerte()]);
    this.repetirContrasena = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8), contrasenaFuerte()]);
    this.rol = new FormControl('', [Validators.required])

    this.registro = new FormGroup({
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena,
      repetirContrasena: this.repetirContrasena,
      rol: this.rol
    });
  }

  coincideContrasena() {
    if (this.registro.value.contrasena === this.registro.value.contrasena) {
      this.coincidenContrasenas = true;
    } else {
      this.coincidenContrasenas = false;
    }
  }

  registerUser() {
    this.amazontService.registerUser(this.registro.value.nombre, this.registro.value.correo, this.registro.value.contrasena, this.registro.value.rol).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al registrar', err);
        this.mensajeEstado = 'Error al registrar';
      }
    });
  }
}
