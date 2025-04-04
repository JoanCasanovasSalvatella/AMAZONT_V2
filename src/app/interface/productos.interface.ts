export interface Producto {
  id: number;
  nombre: string;
  categoriaId: number;  // Ahora referenciamos el ID de la categoría
  imagen: string;
  desc: string;
  precio: number;
  precioAnterior: number;
  cantidad: number;
}
