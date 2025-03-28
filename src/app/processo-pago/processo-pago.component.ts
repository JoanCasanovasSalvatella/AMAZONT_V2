import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../interface/productos.interface';
import { AmazontService } from '../services/amazont.service';

@Component({
  selector: 'app-processo-pago',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './processo-pago.component.html',
  styleUrl: './processo-pago.component.css'
})
export class ProcessoPagoComponent {
  productos: Producto[] = [];
  carrito: Producto[] = [];

  constructor(private amazontService: AmazontService) {
    //Obtener los productos añadidos
    this.carrito = this.amazontService.getCarrito();
  }

  ngOnInit(): void {
    this.productos = this.amazontService.obtenerProductosDestacados();
  }
}
