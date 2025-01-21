import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { categoria } from '../interface/categorias.interface';

@Component({
  selector: 'app-menu-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-cat.component.html',
  styleUrl: './menu-cat.component.css'
})
export class MenuCatComponent {
  categorias = [
    {id:1, nombre: 'Informatica', imagen: 'assets/pcIcon'},
    {id:2, nombre: 'Hogar', imagen: 'assets/hogarIcon.jpg'},
    {id:3, nombre: 'Fitness', imagen: 'assets/fitnessIcon.png'},
  ]
}
