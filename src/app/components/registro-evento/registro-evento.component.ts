import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-registro-evento',
  templateUrl: './registro-evento.component.html',
  styleUrls: ['./registro-evento.component.css'],
  providers: [HotelesService]
})
export class RegistroEventoComponent implements OnInit {

  public servicioModel: {reservacion: String ,tipoServicio: String, precio: String
  }
  public reservaciones;

  constructor(public _hotelesService: HotelesService) { }

  ngOnInit(): void {
  }


  public agregarServicio(){
    this._hotelesService.agregarServicio(this.servicioModel).subscribe(
      response=>{
        console.log(response.servicioPedido);
      }, error=>{
        console.log(<any>error);
      }
    )
  }
}
