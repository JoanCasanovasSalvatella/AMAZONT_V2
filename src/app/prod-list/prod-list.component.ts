import { Component } from '@angular/core';
import { productos } from '../interface/productos.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.css'
})
export class ProdListComponent {
  filtroNombre: string = '';
  filtroPrecio: string = '';

  productos: productos[]= [
    {id:1, nombre : 'Portatil Dell XPS 13', imagen: 'assets/laptop.png', desc: 'Portatil potente y ligero ideal para trabajo', precio: '299.99€', precioAnterior: '299.99€'},
    {id:2, nombre : 'Auriculares Sony WH-1000XM4', imagen: 'assets/auricularesSony.jpg', desc: 'Auriculares inalámbricos con cancelación de ruido de alta calidad, ideales para escuchar música y realizar llamadas en ambientes ruidosos.', precio: '349.99€', precioAnterior: '349.99€'},
    {id:3, nombre : 'PlayStation 5', imagen: 'assets/ps5.jpg', desc: 'Consola de última generación con gráficos 4K y compatibilidad con juegos de realidad virtual.', precio: '499.99€', precioAnterior: '499.99€'},
    {id:4, nombre : 'Xbox Series X', imagen: 'assets/xbox.jpg', desc: 'Consola de última generación desarrollada por la empresa Microsoft.', precio: '399.99€', precioAnterior: '399.99€'},
  ];

  limpiarFiltros() {
    this.filtroNombre = '';
    this.filtroPrecio = '';
  }

  /**
   * Obtiene una lista de productos ordenados por precio en orden ascendente.
   *
   * @returns {productos[]} Una nueva lista de productos ordenada por precio.
   */
  obtenerProductosOrdenadosPorPrecio(): productos[] {
    return this.productos.slice().sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
  }
}
