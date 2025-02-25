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

  constructor(private amazontService: AmazontService) {}

  ngOnInit(): void {
    this.productos = this.amazontService.obtenerProductosDestacados();
    this.novedades = this.amazontService.obtenerNovedades();
  }
}
