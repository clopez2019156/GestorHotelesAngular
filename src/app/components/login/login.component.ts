import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;
  public token: any;
  public identidad: any;


  constructor(
    public _usuarioService: UsuarioService,
    private _router: Router,


  ) {
    this.usuarioModel = new Usuario('','','','');
    this.identidad = this._usuarioService.getIdentidad();
   }

  ngOnInit(): void {
  console.log(this.identidad);
  }
  obtenerToken(){
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      response => {
        this.token = response.token;
        localStorage.setItem('token', this.token);

        Swal.fire({
          title: 'Haz ingresado correctamente',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })


      },error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Usuario no identificado',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(<any>error)
      }
    )
  }
  login() {
    this._usuarioService.login(this.usuarioModel, "").subscribe(
      response =>{
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem("identidad", JSON.stringify(this.identidad))
        this.obtenerToken();
        console.log(this.identidad.rol);
        Swal.fire({
          title: 'Haz ingresado correctamente',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        if(this.identidad.rol==="ROL_ADMIN"){
          this._router.navigate(["/crearHotel"]);
          console.log(this.identidad.rol)
        }else if(this.identidad.rol==="ROL_USER"){
        this._router.navigate(["/inicio"]);
        console.log(this.identidad.rol)
        }

      },error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Usuario no identificado',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(<any>error)
      }
    )
  }

}




