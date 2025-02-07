import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuCatComponent } from './menu-cat/menu-cat.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasProdComponent } from './categorias-prod/categorias-prod.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Default Page',
    component: MainContentComponent, // Componente que quieres cargar por defecto
  },
  {
    path: 'main-cat',
    title: 'Menu Categorias',
    component: MenuCatComponent,
  },
  {
    path: 'main-produc',
    title: 'Main Productos',
    component: ProductosComponent,
  },
  {
    path: 'categorias-prod',
    title: 'Product Categories',
    component: CategoriasProdComponent,
  }
];