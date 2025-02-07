import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.css'
})
export class ProdListComponent {
  filtroCategoria: string = '';
  filtroPrecioMin: number = Infinity;
  filtroPrecioMax: number = Infinity;

  productos: any[]= [
    {id:1, nombre : 'Portatil Dell XPS 13', categoria: 'Electrónica', imagen: 'assets/laptop.png', desc: 'Portatil potente y ligero ideal para trabajo', precio: 299.99, precioAnterior: 299.99},
    {id:2, nombre : 'Auriculares Sony WH-1000XM4', categoria: 'Accesorios', imagen: 'assets/auricularesSony.jpg', desc: 'Auriculares inalámbricos con cancelación de ruido de alta calidad, ideales para escuchar música y realizar llamadas en ambientes ruidosos.', precio: 349.99, precioAnterior: 349.99},
    {id:3, nombre : 'PlayStation 5', categoria: 'Consolas', imagen: 'assets/ps5.jpg', desc: 'Consola de última generación con gráficos 4K y compatibilidad con juegos de realidad virtual.', precio: 499.99, precioAnterior: 499.99},
    {id:4, nombre : 'Xbox Series X', categoria: 'Consolas', imagen: 'assets/xbox.jpg', desc: 'Consola de última generación desarrollada por la empresa Microsoft.', precio: 399.99, precioAnterior: 399.99},
  ];

  filtrarPorCategoria() {
    return this.productos.filter(prod =>
      prod.categoria.includes(this.filtroCategoria)
    );
  }

  filtrarPorPrecioMin() {
    return this.productos.filter(prod =>
      prod.precio >= this.filtroPrecioMin
    );
  }

  filtrarPorPrecioMax() {
    return this.productos.filter(prod =>
      prod.precio <= this.filtroPrecioMax
    );
  }

  get productosFiltrados() {
    let productosFiltrados = this.productos;

    if (this.filtroCategoria) {
      productosFiltrados = this.filtrarPorCategoria();
    }

    if (this.filtroPrecioMin > 0) {
      productosFiltrados = productosFiltrados.filter(prod =>
        prod.precio >= this.filtroPrecioMin
      );
    }

    if (this.filtroPrecioMax < Infinity) {
      productosFiltrados = productosFiltrados.filter(prod =>
        prod.precio <= this.filtroPrecioMax
      );
    }

    return productosFiltrados;
  }

  limpiarFiltros() {
    this.filtroCategoria = '';
    this.filtroPrecioMin = 0;
    this.filtroPrecioMax = Infinity;
  }
}
