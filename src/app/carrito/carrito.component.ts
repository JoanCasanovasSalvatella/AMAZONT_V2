import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../interface/productos.interface';
import { AmazontService } from '../services/amazont.service';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  productos: Producto[] = [];
  carrito: Producto[] = [];
  procesoCompra: boolean = true;

  constructor(private amazontService: AmazontService) {
    //Obtener los productos añadidos
    this.carrito = this.amazontService.getCarrito();
    this.productos = this.amazontService.productos
  }

    ngOnInit(): void {
      this.productos = this.amazontService.obtenerProductosDestacados();
    }

    empezarCompra(){
      this.procesoCompra = false;
    }

    aumentar(producto: any) {
      producto.cantidad +=1;
    }

    disminuir(producto: any) {
      if (producto.cantidad >= 1) {
        producto.cantidad -=1;
      }else {
        this.carrito = this.carrito.filter(item => item.id !== producto.id);
      }
    }


}
