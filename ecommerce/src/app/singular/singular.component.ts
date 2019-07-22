import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-singular',
  templateUrl: './singular.component.html',
  styleUrls: ['./singular.component.css']
})
export class SingularComponent implements OnInit {
  constructor(public productosService:ProductosService) { 
  }

  ngOnInit() {
  }

  comprar(producto){
    this.productosService.enviarCompra(producto)
    .subscribe(datos=>{
      console.log('datos');
    })
  }
}
