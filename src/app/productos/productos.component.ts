import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AmazontService } from '../services/amazont.service';
import { Producto } from '../interface/productos.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  novedades: Producto[] = [];
  carrito: Producto[] = [];

  constructor(private amazontService: AmazontService) { }

  obtenerProd(nombre: string, precio: number, cantidad: number, imagen: string): void {
    const producto: Producto = {
      id: 0, // Assign a default value or generate an appropriate ID
      categoriaId: 0, // Assign a default value
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
      imagen: imagen,
      desc: '', // Assign a default value
      precioAnterior: 0 // Assign a default value
    };
    this.carrito = this.agregarProd(producto);
  }

  ngOnInit(): void {
    this.productos = this.amazontService.obtenerProductosDestacados();
    this.novedades = this.amazontService.obtenerNovedades();
  }

  agregarProd(producto: Producto): Producto[] {
      alert('Producto añadido al carrito');
      return this.amazontService.agregarProducto(producto); // Agregar al carrito
  }

}
