import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { SingularComponent } from './singular/singular.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosdestacadosComponent } from './productosdestacados/productosdestacados.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { CarritoComponent } from './carrito/carrito.component';


const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'header', component: HeaderComponent },
  { path: 'iniciarsesion', component: IniciarsesionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'singular', component: SingularComponent },
  { path: 'productosdestacados', component: ProductosdestacadosComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'carrito', component: CarritoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IniciarsesionComponent,
    HomeComponent,
    ProductosComponent,
    SingularComponent,
    FooterComponent,
    ProductosdestacadosComponent,
    RegistrarseComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: false}
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
