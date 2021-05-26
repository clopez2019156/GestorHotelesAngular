import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HoteleriaComponent } from './components/hoteleria/hoteleria.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'registro', component: RegistroComponent},
  {path: 'verUsuarios', component: VerUsuariosComponent},
  {path: 'inicio', component: PaginaPrincipalComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'habitaciones', component: HabitacionesComponent},
  {path: 'reservar', component: ReservacionComponent},
  {path: 'crearHotel', component: HoteleriaComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'miCuenta', component: CuentaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
