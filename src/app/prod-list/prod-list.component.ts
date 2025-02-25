import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AmazontService } from '../services/amazont.service';
import { Producto } from '../interface/productos.interface';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.css'
})
export class ProdListComponent implements OnInit {
  filtroCategoria: string = '';
  filtroPrecioMin: number = 0;
  filtroPrecioMax: number = Infinity;
  productos: Producto[] = [];

  constructor(private amazontService: AmazontService) {}

  ngOnInit(): void {
    this.productos = this.amazontService.productos;
  }

  get productosFiltrados() {
    return this.productos.filter(prod =>
      (this.filtroCategoria ? this.amazontService.obtenerNombreCategoria(prod.categoriaId).includes(this.filtroCategoria) : true) &&
      prod.precio >= this.filtroPrecioMin &&
      prod.precio <= this.filtroPrecioMax
    );
  }

  limpiarFiltros() {
    this.filtroCategoria = '';
    this.filtroPrecioMin = 0;
    this.filtroPrecioMax = Infinity;
  }
}
