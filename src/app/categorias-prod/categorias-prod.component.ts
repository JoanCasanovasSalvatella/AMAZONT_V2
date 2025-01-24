import { Component } from '@angular/core';
//import { categorias } from '../interface';

@Component({
  selector: 'app-categorias-prod',
  standalone: true,
  imports: [],
  templateUrl: './categorias-prod.component.html',
  styleUrl: './categorias-prod.component.css'
})
export class CategoriasProdComponent {
  //Lista de categorias
  categorias = [
    {id:1, nombre: 'Informatica', imagen: 'assets/pcIcon'},
    {id:2, nombre: 'Hogar', imagen: 'assets/hogarIcon.jpg'},
    {id:3, nombre: 'Fitness', imagen: 'https://banner2.cleanpng.com/20190430/slw/kisspng-physical-fitness-exercise-fitness-centre-vector-gr-1713895139831.webp'},
    {id:4, nombre: 'Alimentación', imagen: 'assets/fitnessIcon.png'},
    {id:5, nombre: 'Ropa y moda', imagen: 'assets/fitnessIcon.png'},
    {id:6, nombre: 'Entretenimiento y hobbies', imagen: 'assets/fitnessIcon.png'},
    {id:7, nombre: 'Cuidado personal', imagen: 'assets/fitnessIcon.png'},
  ]
}
