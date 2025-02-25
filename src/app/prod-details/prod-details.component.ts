import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmazontService } from '../services/amazont.service';
import { Producto } from '../interface/productos.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prod-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})
export class ProdDetailsComponent {
  selectProd?: Producto;

  constructor(private route: ActivatedRoute, private amazontService: AmazontService) {
    const prodId= route.snapshot.params['prodId'];
    this.selectProd = amazontService.getProducto(prodId);
  }
}
