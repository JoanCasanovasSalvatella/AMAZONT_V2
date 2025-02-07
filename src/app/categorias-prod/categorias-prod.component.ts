import { Component } from '@angular/core';
import { ProdListComponent } from "../prod-list/prod-list.component";

@Component({
  selector: 'app-categorias-prod',
  standalone: true,
  imports: [ProdListComponent],
  templateUrl: './categorias-prod.component.html',
  styleUrl: './categorias-prod.component.css'
})
export class CategoriasProdComponent {
  //Lista de categorias
  categorias = [
    {id:1, nombre: 'Informatica', imagen: 'assets/pcIcon'},
    {id:2, nombre: 'Hogar', imagen: 'assets/hogarIcon.jpg'},
    {id:3, nombre: 'Fitness', imagen: 'assets/fit.png'},
    {id:4, nombre: 'Alimentación', imagen: 'assets/food.png'},
    {id:5, nombre: 'Ropa y moda', imagen: 'assets/moda.png'},
    {id:6, nombre: 'Entretenimiento y hobbies', imagen: 'assets/entretenimiento.png'},
  ]
}
