import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interface/categorias.interface';
import { Producto } from '../interface/productos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazontService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  categorias: Categoria[] = [];
  productos: Producto[]= [];
  carrito: Producto[] = [];

  constructor(private http: HttpClient) {
    this.categorias = [
      { id: 1, nombre: 'Informática', imagen: 'assets/pcIcon' },
      { id: 2, nombre: 'Hogar', imagen: 'assets/hogarIcon.jpg' },
      { id: 3, nombre: 'Fitness', imagen: 'assets/fit.png' },
      { id: 4, nombre: 'Alimentación', imagen: 'assets/food.png' },
      { id: 5, nombre: 'Ropa y moda', imagen: 'assets/moda.png' },
      { id: 6, nombre: 'Entretenimiento y hobbies', imagen: 'assets/entretenimiento.png' }
    ];

    this.productos = [
      { id: 1, nombre: 'Portátil Dell XPS 13', categoriaId: 1, imagen: 'assets/laptop.png', desc: 'Portátil potente y ligero ideal para trabajo', precio: 299.99, precioAnterior: 239.99, cantidad: 1 },
      { id: 2, nombre: 'Auriculares Sony WH-1000XM4', categoriaId: 1, imagen: 'assets/auricularesSony.jpg', desc: 'Auriculares inalámbricos', precio: 349.99, precioAnterior: 279.99, cantidad: 1 },
      { id: 3, nombre: 'PlayStation 5', categoriaId: 6, imagen: 'assets/ps5.jpg', desc: 'Consola de última generación con gráficos 4K.', precio: 499.99, precioAnterior: 469.99, cantidad: 1 },
      { id: 4, nombre: 'Xbox Series X', categoriaId: 6, imagen: 'assets/xbox.jpg', desc: 'Consola de última generación de Microsoft.', precio: 399.99, precioAnterior: 309.99, cantidad: 1 },
      { id: 5, nombre: 'Nvidia RTX 4090', categoriaId: 1, imagen: 'assets/prod1.png', desc: 'Tarjeta gráfica de alto rendimiento.', precio: 210.99, precioAnterior: 150.99, cantidad: 1 },
      { id: 6, nombre: 'Asus Prime B550', categoriaId: 1, imagen: 'assets/prod2.jpg', desc: 'Placa base de alto rendimiento.', precio: 179.99, precioAnterior: 129.99, cantidad: 1 },
      { id: 7, nombre: 'Sofá de 4 plazas', categoriaId: 2, imagen: 'assets/prod3.png', desc: 'Sofá cómodo y espacioso.', precio: 799.89, precioAnterior: 719.79, cantidad: 1 },
      { id: 8, nombre: 'Lavadora Bosch', categoriaId: 2, imagen: 'assets/prod4.png', desc: 'Lavadora eficiente y de última tecnología.', precio: 899.79, precioAnterior: 820.49, cantidad: 1 }
    ];
  }

  //===================================================================================================
  //USER
  //===================================================================================================

  //LOGIN, REGISTRO, RECUPERAR CONTRASEÑA
  verificarCorreo(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/VerifyEmail`, { email: email });
  }

  //LOGIN
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/Login`, { email, password });
  }

  //REGISTER
  registerUser(name: string, email: string, password: string, rol: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/Create`, { name, email, password, rol });
  }

  //RECUPERAR CONTRASEÑA
  enviarCodigo(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/SendCode`, { email: email });
  }
  verificarCodigo(email: string, code: string | null): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/VerifyCode`, { email: email, code: code } );
  }
  verificarContrasena(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/VerifyPassword`, { email: email, password: password });
  }
  cambiarContrasena(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/ChangePassword`, { email: email, password: password });
  }

  //CATEGORIA
  obtenerNombreCategoria(categoriaId: number): string {
    const categoria = this.categorias.find(c => c.id === categoriaId);
    return categoria ? categoria.nombre : 'Desconocida';
  }

  //PRODUCTOS
  obtenerProductosDestacados(): Producto[] {
    return this.productos.slice(0, this.productos.length / 2); // Primera mitad
  }
  obtenerNovedades(): Producto[] {
    return this.productos.slice(this.productos.length / 2); // Segunda mitad
  }
  getProducto(name: string): Producto | undefined {
    return this.productos.find((producto) => producto.nombre === name);
  }

  //Agregar un producto al carrito
  agregarProducto(product: Producto): Producto[] {
    const index = this.productos.findIndex((producto) => producto.nombre === product.nombre);
    if (index !== -1) {
      this.carrito[index].cantidad += product.cantidad;
    } else {
      this.carrito.push(product);
    }
    return this.carrito;
  }

  getCarrito(): Producto[] {
    return this.carrito;
  }
}
