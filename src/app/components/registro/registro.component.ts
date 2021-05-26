import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[UsuarioService]
})
export class RegistroComponent implements OnInit {
  public usuarioModel: Usuario;



  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.usuarioModel = new Usuario('','','','');


   }

  ngOnInit(): void {

  }

  registrarUsuario(){

    this._usuarioService.registrarUsuario(this.usuarioModel).subscribe(
    response=>{
      console.log(response);
      this._router.navigate(['/login']);

    },
    error=>{
     console.log(<any>error);
     Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Este usuario ya está registrado',
      showConfirmButton: false,
      timer: 1500
    })

    }
    )

  }

}
