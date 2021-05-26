import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelesService } from 'src/app/services/hoteles.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
  providers: [HotelesService]
})
export class PaginaPrincipalComponent implements OnInit {
public hotelModel: Hotel;
public hoteles: any;
public nombreBuscar = {nombre: ''};
public hotelSeleccionado: any;


  constructor(
    private _hotelesService: HotelesService,
    private _router: Router
  ) {
    this.hotelModel = new Hotel('','','','',[{nombreHabitacion: '',precio: '', disponibilidad: ''}]
    ,[{tipoEvento: '', fecha: '', hora: ''}]);
    this.hotelSeleccionado=this._hotelesService.getHotel();
   }

  ngOnInit(): void {
    this.mostrarHoteles();
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


buscarHotelNombre(nombre: any){
  this.nombreBuscar.nombre = nombre;

  this._hotelesService.buscarHotel(this.nombreBuscar).subscribe(
    response=>{
      console.log(response);
      this.hotelSeleccionado=response.hotelEncontrado;
      localStorage.setItem("hotelSeleccionado",JSON.stringify(this.hotelSeleccionado));
      this._router.navigate(['/hotel']);
    },
    error=>{
      console.log(<any>error);

    }
  )
}



}
