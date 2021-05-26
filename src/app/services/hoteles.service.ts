import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public hotel: any;

  constructor(
    public _http: HttpClient,
    public _usuarioService: UsuarioService
  ) {
    this.ruta = GLOBAL.url;
  }

  crearHotel(hotel): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this._usuarioService.getToken());
    let params = JSON.stringify(hotel);

    return this._http.post(this.ruta+'crearHotel', params, {headers: headersToken});

  }

  agregarHabitacionesHotel(habitacion): Observable<any>{
    let params = JSON.stringify(habitacion);
    let headersToken = this.headersVariable.set('Authorization', this._usuarioService.getToken());

    return this._http.put(this.ruta+'agregarHabitacionesHotel', params, {headers: headersToken});


  }

  editarHotel(hotel): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this._usuarioService.getToken());
    let params = JSON.stringify(hotel);

    return this._http.put(this.ruta+'editarHotel', params, {headers: headersToken});
  }

  mostrarHoteles():Observable<any>{

    return this._http.post(this.ruta+'mostrarHoteles', {headers: this.headersVariable})

  }

  buscarHotel(usuario):Observable<any>{

    let params = JSON.stringify(usuario);

    return this._http.post(this.ruta+'buscarHotel', params, {headers: this.headersVariable});

  }

  getHotel(){
    var hotel2 = JSON.parse(localStorage.getItem("hotelSeleccionado"));
    if(hotel2 != "undefined"){
      this.hotel = hotel2;
    }else {
      this.hotel = null;
    }
    return this.hotel;
  }


  hacerReservacion(reservacion):Observable<any>{
    let params = JSON.stringify(reservacion);
    let headersToken = this.headersVariable.set('Authorization', this._usuarioService.getToken());

    return this._http.post(this.ruta+'hacerReservacion', params, {headers: headersToken});

  }



}
