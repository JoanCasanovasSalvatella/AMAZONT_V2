import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuCatComponent } from './menu-cat/menu-cat.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasProdComponent } from './categorias-prod/categorias-prod.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Main Page',
    component: MainContentComponent
  },
  {
    path: 'main-cat',
    title: 'Menu Categorias',
    component: MenuCatComponent
  },
  {
    path: 'main-produc',
    title: 'Main Productos',
    component: ProductosComponent
  },
  {
    path: 'categorias-prod',
    title: 'Pagina Categorias',
    component: CategoriasProdComponent
  },
  {
    path: 'login',
    title: 'Login Page',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Register Page',
    component: RegisterComponent
  },
  {
    path: 'categorias-prod/:prodId',
    title: 'Product Details Page',
    component: ProdDetailsComponent
  }
];
