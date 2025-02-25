import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AmazontService } from '../services/amazont.service';
import { Categoria } from '../interface/categorias.interface';

@Component({
  selector: 'app-menu-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-cat.component.html',
  styleUrl: './menu-cat.component.css'
})
export class MenuCatComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private amazontService: AmazontService) {}

  ngOnInit(): void {
    this.categorias = this.amazontService.categorias;
  }
}
