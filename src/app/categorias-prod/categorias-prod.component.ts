import { Component, OnInit } from '@angular/core';
import { ProdListComponent } from "../prod-list/prod-list.component";
import { AmazontService } from '../services/amazont.service';
import { Categoria } from '../interface/categorias.interface';

@Component({
  selector: 'app-categorias-prod',
  standalone: true,
  imports: [ProdListComponent],
  templateUrl: './categorias-prod.component.html',
  styleUrl: './categorias-prod.component.css'
})
export class CategoriasProdComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private amazontService: AmazontService) {}

  ngOnInit(): void {
    this.categorias = this.amazontService.categorias;
  }
}
