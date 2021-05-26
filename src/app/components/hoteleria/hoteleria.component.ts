import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/models/habitacion.model';
import { Hotel } from 'src/app/models/hotel.model';
import { Usuario } from 'src/app/models/usuario.model';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteleria',
  templateUrl: './hoteleria.component.html',
  styleUrls: ['./hoteleria.component.css'],
  providers:[HotelesService, UsuarioService]
})
export class HoteleriaComponent implements OnInit {
  public hotelModel: Hotel;
  public editHotel: Hotel;
  public hoteles;
  public admins;
  public habitacionModel: Habitacion;
  public admin: Usuario;

  constructor(public _hotelesService: HotelesService,
   public  _usuarioService: UsuarioService) {
    this.hotelModel = new Hotel('','','','',[{nombreHabitacion: '',precio: '', disponibilidad: ''}]
    ,[{tipoEvento: '', fecha: '', hora: ''}]);
    this.editHotel= new Hotel('','','','',[{nombreHabitacion: '',precio: '', disponibilidad: ''}]
    ,[{tipoEvento: '', fecha: '', hora: ''}]);
    this.admin = new Usuario('','','','');
   this.habitacionModel = new Habitacion('','','');

   }

  ngOnInit(): void {
    this.mostrarHoteles();
    this.mostrarUsuarios();
  }

  mostrarUsuarios(){
    this._usuarioService.verAdminsHotel().subscribe(
      response=>{
        this.admins=response.usuarios;
      }, error=>{
        console.log(<any>error)
      }
    )
  }

  crearAdminHotel(){
    this._usuarioService.crearAdminHotel(this.admin).subscribe(
      response=>{
        console.log(response.usuarioguardado);
        this.mostrarUsuarios();
        Swal.fire('usuario guardado');
      },error=>{
  console.log(<any>error);

      }
    )
  }

  mostrarHoteles(){
    this._hotelesService.mostrarHoteles().subscribe(
      response=>{
        console.log(response)
        this.hoteles=response.hotelEncontrado;

      },
      error=>{
        console.log(<any>error)
      }
    )
}

  crearHotel(){
  this._hotelesService.crearHotel(this.hotelModel).subscribe(
response=>{
  console.log(response.hotelGuardado);
  this.mostrarUsuarios();
  this.mostrarHoteles();
  Swal.fire('Hotel Guardado');
},
error=>{
  console.log(<any>error);
}
)
}

agregarHabitacionesHotel(){
  this._hotelesService.agregarHabitacionesHotel(this.habitacionModel).subscribe(
    response=>{
      this.mostrarUsuarios();
      this.mostrarHoteles();
      console.log(response);
      console.log();
      Swal.fire('Habitacion Guardada');
    },error=>{
      console.log(this.habitacionModel);
      console.log();
      console.log(<any>error)
    }
  )
}

editarHotel(){
  this._hotelesService.editarHotel(this.editHotel).subscribe(
    response=>{
      console.log(response.hotelActualizado);
      this.mostrarHoteles();
      Swal.fire('Hotel Actualizado');
    },
    error=>{
      console.log(<any>error);
    }
  )

}
}
