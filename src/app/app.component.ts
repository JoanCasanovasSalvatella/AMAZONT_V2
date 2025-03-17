import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AMAZONT';

  darkMode() {
    let body = document.body;
    let title = document.querySelector("h2");
    let div = document.querySelector("div"); // Selecciona el div

    var isDark = body.getAttribute("data-is-dark") === "true";

      //Colores del modo claro
      if (isDark) {
         if (title) {
            body.style.backgroundColor = "#FFFFFF";
            body.style.color = "#080808";
            title.style.color = "#FFFFFF"; // Change title color in light mode
          }

          if (div) {
            div.style.backgroundColor = "#232f3e"; // Cambia el fondo del div en el modo claro
          }
      }

      //Colores del modo oscuro
      else {
        if (title) {
          body.style.backgroundColor = "#303030";
          body.style.color = "#FFFFFF";
          title.style.color = "#FFFFFF"; // Change title color in light mode
        }

        if (div) {
          div.style.backgroundColor = "#303030"; // Cambia el fondo del div en el modo claro
        }
      }

      // Cambiar el estado de isDark para la próxima llamada
      body.setAttribute("data-is-dark", String(!isDark));
    }
  }
