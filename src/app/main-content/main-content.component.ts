import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  //Carroussel automatico de los productos
  productos = [
    {id:1, nombre: 'Nvidia RTX 4090', imagen: 'assets/prod1.png', desc: 'Tarjeta grafica', precio: '210.99€'},
    {id:2, nombre: 'Asus Prime B550-Plus', imagen: 'assets/prod2.jpg', desc: 'Placa base', precio: '129.99€'},
    {id:3, nombre: 'Sofá de 4 plazas', imagen: 'assets/prod3.png', desc: 'Sofá de 4 plazas con chaiselongue reversible', precio: '799€'},
    {id:4, nombre: '', imagen: '', desc: '', precio: ''},
  ]

  //Funcion que permite avanzar en el slider
  clickNext(){
    var index = this.productos[0]

    for(var i = 0; i < this.productos.length -1; i++){
      this.productos[i] = this.productos[i + 1]; //Avanzar una posicion
    }

    this.productos[this.productos.length - 1] = index;
  }
}

export interface productos{
  id : number;
  nombre : string;
  imagen: string;
  desc: string;
  precio: string;
}
