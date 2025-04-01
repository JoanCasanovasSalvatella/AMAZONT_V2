import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuCatComponent } from './menu-cat/menu-cat.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasProdComponent } from './categorias-prod/categorias-prod.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { RecoverPwdComponent } from './recover-pwd/recover-pwd.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProcessoPagoComponent } from './processo-pago/processo-pago.component';
import { SendComponent } from './send/send.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { RecordComponent } from './record/record.component';
import { PayMethodsComponent } from './pay-methods/pay-methods.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { UpdProdComponent } from './upd-prod/upd-prod.component';

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
  },
  {
    path: 'recoverPassword',
    title: 'Recover Password',
    component: RecoverPwdComponent
  },
  {
    path: 'shopping_cart',
    title: 'SHOPPING CART',
    component: CarritoComponent,
    children:[
      {
        path: 'payment',
        title: 'Payment',
        component: ProcessoPagoComponent
      },
      {
        path: 'confirm',
        title: 'Delivery',
        component: SendComponent
      },
      {
        path: 'addCard',
        title: 'Add card',
        component: AddCardComponent
      }
    ]
  },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileComponent,
    children:[
      {
        path: 'data',
        title: 'User Data',
        component: UserProductsComponent
      },
      {
        path: 'user_record',
        title: 'User record',
        component: RecordComponent
      },
      {
        path: 'user_pay_method',
        title: 'User payment methods',
        component: PayMethodsComponent
      }
    ]
  },
  {
    path: 'add_product',
    title: 'Add Product',
    component: AddProdComponent
  },
  {
    path: 'update_product',
    title: 'Update Product',
    component: UpdProdComponent
  }

];
