import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
  providers: [UsuarioService]
})
export class CuentaComponent implements OnInit {
  public usuarios;
  public idUsuarioModel: Usuario;
  constructor(private _usuarioService: UsuarioService,
    private _router: Router) {
    this.idUsuarioModel = new Usuario("","","","");
   }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this._usuarioService.verCuenta().subscribe(
      response => {
        this.usuarios = response.usuarioEncontrado;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  obtenerUsuarioId(idUsuario){
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe(
      response=>{
        this.idUsuarioModel = response.usuarioEncontrado;
        console.log(response);

      }
    )
  }

  editarUsuario(){
    this._usuarioService.editarUsuario(this.idUsuarioModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerUsuario();
      },error=>{
        console.log(<any>error)
      }
    )
  }

  eliminarUsuario(idUsuario){
    this._usuarioService.eliminarUsuario(idUsuario).subscribe(
      response=>{
        console.log(response);
        this._router.navigate[('/registro')];
        localStorage.clear();
      },error=>{
        console.log(<any>error)
      }
    )
  }


}
