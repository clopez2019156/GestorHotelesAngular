import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css'],
  providers:[UsuarioService]
})
export class VerUsuariosComponent implements OnInit {
public usuarios: any;
  constructor(private _usuarioService: UsuarioService) {
   }

  ngOnInit(): void {
    this.verUSuarios();
  }

  verUSuarios(){
    this._usuarioService.verUsuarios().subscribe(
      response=>{
    this.usuarios = response.usuarios;
  },error=>{
    console.log(<any>error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tiene permisos para ver a los usuarios'
    })
}
)
}



}
