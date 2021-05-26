import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from './global.service';
import { Observable } from "rxjs";
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public ruta: String;
  public identidad: any;
  public token: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   registrarUsuario(usuario: Usuario): Observable<any>{

    let params = JSON.stringify(usuario);

    return this._http.post(this.ruta+'crearUsuario', params, {headers: this.headersVariable});

   }


   obtenerUsuarios(): Observable<any>{
    return this._http.get(this.ruta + 'obtenerUsuarios', {headers: this.headersVariable});
  }

  obtenerUsuarioId(id:String): Observable<any>{
    return this._http.get(this.ruta + 'obtenerUsuarioId/'+ id, {headers: this.headersVariable})
  }

  editarUsuario(usuario: Usuario):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())


    return this._http.put(this.ruta + 'editarUsuario/' + usuario._id, params, {headers: headersToken})
  }

  eliminarUsuario(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.delete(this.ruta + 'eliminarUsuario/' + id, {headers: headersToken})
  }




   verUsuarios(): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.get(this.ruta+'verUsuarios',{headers: headersToken});


   }


   verCuenta() : Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.get(this.ruta+'verCuenta',{headers: headersToken});


   }

   verAdminsHotel() : Observable<any>{

    return this._http.get(this.ruta+'verAdminsHotel',{headers: this.headersVariable});


   }

   crearAdminHotel(usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.post(this.ruta+'crearAdminHotel', params, {headers: headersToken});

   }

   login(usuario: any, getToken:any ): Observable<any>{
    if(getToken != null){
      usuario.getToken = getToken;
    }
    let params = JSON.stringify(usuario);
    return this._http.post(this.ruta + "login", params , {headers: this.headersVariable});
  }

  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem("identidad"));
    if(identidad2 != "undefined"){
      this.identidad = identidad2;
    }else {
      this.identidad = null;
    }
    return this.identidad;
  }
  getToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != "undefined"){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
