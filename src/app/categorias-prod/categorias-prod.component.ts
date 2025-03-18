import { Component, OnInit } from '@angular/core';
import { ProdListComponent } from "../prod-list/prod-list.component";
import { AmazontService } from '../services/amazont.service';
import { Categoria } from '../interface/categorias.interface';
import { Producto } from '../interface/productos.interface';

@Component({
  selector: 'app-categorias-prod',
  standalone: true,
  imports: [ProdListComponent],
  templateUrl: './categorias-prod.component.html',
  styleUrl: './categorias-prod.component.css'
})
export class CategoriasProdComponent implements OnInit {
  filtroCategoria: string = '';
  isOpen = false; // Estado del menú

  categorias: Categoria[] = [];
  productos: Producto[] = [];

  constructor(private amazontService: AmazontService) {
    //Declaramos variables
    var side_menu = document.getElementById("side_menu");
    var actionBtn = document.getElementById("btn_open");
    var body = document.getElementById("body");
  }

  ngOnInit(): void {
    this.categorias = this.amazontService.categorias;
    this.productos = this.amazontService.productos;
  }

  get productosFiltrados() {
    return this.productos.filter(prod =>
      (this.filtroCategoria ? this.amazontService.obtenerNombreCategoria(prod.categoriaId).includes(this.filtroCategoria) : true));
  }

  toggleMenu() {
    this.isOpen = !this.isOpen; // Cambia el estado del menú
  }

  //Menu desplegable
  menuOpened = false;

  /*openMenu(event: Event) {
    event.preventDefault(); // previene que cargue la pg acutal
    this.menuOpened = !this.menuOpened;

    if (this.menuOpened) {
        document.body.classList.add('no-scroll'); // no puedes hacer scroll
    } else {
        document.body.classList.remove('no-scroll'); // vuelves a poder hacer scroll
    }
  }*/
    openMenu(event: Event) {
      event.preventDefault(); // Previene la acción predeterminada

      const sideMenu = document.getElementById('side_menu'); // Selecciona el menú lateral
      const body = document.getElementById('body'); // Selecciona el body principal
      const menu = document.querySelector('.menu'); // Selecciona el div con la clase .menu

      if (sideMenu && menu) {
        const isOpen = sideMenu.classList.toggle('menu-opened'); // Alterna la clase del menú
        const menuOpen = menu.classList.toggle('menu-opened'); // Alterna la clase del menú

        if (isOpen) {
          body?.classList.add('no-scroll'); // Bloquea el scroll si el menú está abierto
          menu.classList.add('menu-resized'); // Agrega la clase para redimensionar el menú

        } else {
          body?.classList.remove('no-scroll'); // Restaura el scroll si el menú se cierra
          menu.classList.remove('menu-resized'); // Agrega la clase para redimensionar el menú
        }
      }
  }
}
