import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AMAZONT';

  //Funcion que alterna entre el modo oscuro y el claro
  darkMode() {
    var element = document.getElementById('head');
    let body = document.body;
    let header = document.getElementById('content');

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
