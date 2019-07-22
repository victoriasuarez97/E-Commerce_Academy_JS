import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IProducto {
  nombre : string,
  precio : string,
  foto: string
}

export interface IProductos {
  data : string[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient){}

  enviarCompra(producto){
    return this.http.get<any>(this.baseUrl + '/compra/'+producto);
  }

  DatosProductoPost : IProducto = {
    nombre: '',
    precio: '',
    foto: ''
  };

  private baseUrl : string = environment.production? '' : 'http://localhost:8080';

  getProductos() {
    return this.http.get<IProductos>(this.baseUrl + '/prod');
  }

  postProducto(data : IProducto) {
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.http.post<IProducto>(this.baseUrl + '/prod', data, httpOptions );
  }

  deleteProducto(i) {
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.http.delete<IProducto>(this.baseUrl + '/prod/' + i, httpOptions );
  }

  actualizarProducto(i, data : IProducto) {
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.http.put<IProducto>(this.baseUrl + '/prod/' + i, data, httpOptions );
  }

}
