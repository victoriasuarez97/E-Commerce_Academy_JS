import { Component, OnInit } from '@angular/core';
import { ProductosService, IProducto, IProductos } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaProductos : string[] = [];
  datosProductosPost : IProducto;


constructor(private productosService : ProductosService) {
  this.datosProductosPost = productosService.DatosProductoPost;
}


ngOnInit() {
  this.obtenerProductos();
}

//GET
obtenerProductos() {
  this.productosService.getProductos()
  .subscribe( (productos: IProductos) => {
    console.log('obtenerProductos: ', productos.data);
    this.listaProductos = productos.data;
  })
}

veriDatosProductoPost() {
  if(this.datosProductosPost.nombre != '' && this.datosProductosPost.precio != '' && this.datosProductosPost.foto != '')
    return true;
  else 
    return false;
}

borrarDatosProductoPost() {
  this.datosProductosPost.nombre = '';
  this.datosProductosPost.precio = '';
  this.datosProductosPost.foto = '';
}


//POST
guardarProducto() {
  if(this.veriDatosProductoPost()) {
    this.productosService.postProducto(this.datosProductosPost)
    .subscribe( (producto: IProducto) => {
      console.log('guardarProducto: ', producto);
      this.borrarDatosProductoPost();
      this.obtenerProductos();
    })
  }
}

//DELETE
borrarProducto(i) {
  this.productosService.deleteProducto(i)
  .subscribe( (producto: IProducto) => {
    console.log('borrarProducto: ', producto);
    this.obtenerProductos();
  })
}

//PUT
actualizarProducto(i) {
  if(this.veriDatosProductoPost()) {
    this.productosService.actualizarProducto(i, this.datosProductosPost)
    .subscribe( (producto: IProducto) => {
      console.log('actualizarProducto: ', producto);
      this.borrarDatosProductoPost();
      this.obtenerProductos();
    })
  }
}
}

