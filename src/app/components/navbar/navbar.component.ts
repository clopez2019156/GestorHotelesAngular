import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {
  public identidad;
  public hotelModel;
  public hotelSeleccionado;
  public nombreBuscar = {nombre: ''}

  constructor(public _usuarioService: UsuarioService,
    public _hotelesService: HotelesService,
    public _router: Router) {
    this.identidad = this._usuarioService.getIdentidad();
    this.hotelModel = new Hotel('','','','',[{nombreHabitacion: '',precio: '', disponibilidad: ''}]
    ,[{tipoEvento: '', fecha: '', hora: ''}]);
    this.hotelSeleccionado=this._hotelesService.getHotel();
   }

  ngOnInit(): void {
    console.log(this.identidad);

  }

  buscarHotel(){
    this._hotelesService.buscarHotel(this.hotelModel).subscribe(
      response=>{
        console.log(response);

        this.hotelSeleccionado=response.hotelEncontrado;
        localStorage.setItem("hotelSeleccionado", JSON.stringify(this.hotelSeleccionado));
        console.log(response);
        this._router.navigate(['/hotel']);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Este hotel no existe',
          showConfirmButton: false,
          timer: 1500
        })

      }
    )
  }


}
