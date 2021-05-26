import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion.model';
import { Usuario } from 'src/app/models/usuario.model';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css'],
  providers:[HotelesService, UsuarioService]
})
export class ReservacionComponent implements OnInit {

  public reservacionModel: Reservacion;
  public hotel;
  public habitaciones;

  constructor(public _hotelesService: HotelesService,
    public _usuarioService: UsuarioService) {
    this.reservacionModel = new Reservacion('','','','','','');
    this.hotel = _hotelesService.getHotel();
    this.reservacionModel.hotel = this._hotelesService.getHotel()._id;
  }

  ngOnInit(): void {
    this.habitaciones = this._hotelesService.getHotel().habitaciones;
  }

  hacerReservacion(){

    this._hotelesService.hacerReservacion(this.reservacionModel).subscribe
    (
      response=>{
        Swal.fire('Reservacion Hecha');
        console.log(response.reservacionHecha);

      },
      error=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Hubo un error al reservar',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(error)
        console.log(this.reservacionModel.habitacion)
      }
    )
  }

}
