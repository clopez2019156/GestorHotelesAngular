import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { HoteleriaComponent } from './components/hoteleria/hoteleria.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    VerUsuariosComponent,
    PaginaPrincipalComponent,
    NavbarComponent,
    HotelComponent,
    HabitacionesComponent,
    ReservacionComponent,
    HoteleriaComponent,
    EventosComponent,
    CuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
