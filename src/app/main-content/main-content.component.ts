import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productos } from '../interface/productos.interface';

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
    {id:1, nombre: 'Nvidia RTX 4090', imagen: 'assets/prod1.png', desc: 'Tarjeta grafica', precio: '210.99€', precioAnterior: '210.99€'},
    {id:2, nombre: 'Asus Prime B550-Plus', imagen: 'assets/prod2.jpg', desc: 'Placa base', precio: '129.99€', precioAnterior: '129.99€'},
    {id:3, nombre: 'Sofá de 4 plazas', imagen: 'assets/prod3.png', desc: 'Sofá de 4 plazas', precio: '799€', precioAnterior: '799€'},
    {id:4, nombre: 'Lavabora', imagen: 'assets/prod4.png', desc: 'Lavadora bosch', precio: '820€', precioAnterior: '820€'}
  ]

  novedades = [
    {id:1, nombre: 'Gato para coche', imagen: 'assets/prod5.png', desc: 'VEVOR Gato para Coche', precio: '241.99€', precioAnterior: '260.00€'},
    {id:2, nombre: 'Rueda Pireli', imagen: 'assets/prod6.png', desc: 'Rueda Pireli para formula 1', precio: '240€', precioAnterior: '340.99€'},
    {id:3, nombre: 'Lego Technic', imagen: 'assets/prod7.png', desc: 'Lego Technic', precio: '25.99€', precioAnterior: '20.99'},
    {id:4, nombre: 'Forza Motorsport', imagen: 'assets/prod8', desc: 'Forza Motorsport Edicion deluxe', precio: '79.99€', precioAnterior: '20.99€'},
  ]

  //Funcion que alterna entre el modo oscuro y el claro
  darkMode() {
    var element = document.getElementById('head');
    let body = document.body;

    if(element){
      element.classList.toggle("dark_mode");
    }

    var isDark = body.getAttribute("data-is-dark") === "true";

      //Colores del modo claro
      if (isDark) {
         body.style.backgroundColor = "#FFFFFF";
         body.style.color = "#080808";
      }

      //Colores del modo oscuro
      else {
        body.style.backgroundColor = "#303030";
        body.style.color = "#FFFFFF";
      }

      // Cambiar el estado de isDark para la próxima llamada
      body.setAttribute("data-is-dark", String(!isDark));
    }
}


