import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { productos } from '../interface/productos.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  //Array de productos
  productos = [
    {id:1, nombre: 'Nvidia RTX 4090', imagen: 'assets/prod1.png', desc: 'Tarjeta grafica', precio: '210.99€', precioAnterior: '210.99€'},
    {id:2, nombre: 'Asus Prime B550', imagen: 'assets/prod2.jpg', desc: 'Placa base', precio: '129.99€', precioAnterior: '129.99€'},
    {id:3, nombre: 'Sofá de 4 plazas familiar', imagen: 'assets/prod3.png', desc: 'Sofá ', precio: '799€', precioAnterior: '799€'},
    {id:4, nombre: 'Lavabora inteligente bosch', imagen: 'assets/prod4.png', desc: 'Lavadora', precio: '820€', precioAnterior: '820€'}
  ]

  novedades = [
    {id:1, nombre: 'Gato para coche', imagen: 'assets/prod5.png', desc: 'VEVOR electrico', precio: '241.99€', precioAnterior: '260.00€'},
    {id:2, nombre: 'Rueda Pireli', imagen: 'assets/prod6.png', desc: 'Rueda Pireli', precio: '240€', precioAnterior: '340.99€'},
    {id:3, nombre: 'Lego Technic', imagen: 'assets/prod7.png', desc: 'Lego Technic', precio: '25.99€', precioAnterior: '20.99€'},
    {id:4, nombre: 'Forza Motorsport', imagen: 'assets/prod8.png', desc: 'Forza Motorsport', precio: '70.99€', precioAnterior: '80.99€'},
  ]
}
