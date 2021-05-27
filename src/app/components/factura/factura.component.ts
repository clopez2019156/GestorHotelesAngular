import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [HotelesService, UsuarioService]
})
export class FacturaComponent implements OnInit {
  public facturacion;
  public servicios;
  public idUsuarioModel;
  public id;
  public hotelEnc;
  public diasH;
  public habiS;


  constructor(public _hotelesService: HotelesService,
    public _usuarioService: UsuarioService) {
    this.facturacion=this._hotelesService.getReservacionId();
    this.servicios=this._hotelesService.getReservacion();
     }

  ngOnInit(): void {
    this.facturar();
    this.obtenerUsuarioId();
    this.obtenerHotelId();
  }

  obtenerUsuarioId(){
    this._usuarioService.obtenerUsuarioId(this.facturacion.usuario).subscribe(
      response=>{
        this.idUsuarioModel = response.usuarioEncontrado;
        console.log(response.usuarioEncontrado);

      }
    )
  }

  obtenerHotelId(){
    this._hotelesService.buscarHotelId(this.facturacion.hotel).subscribe(
      response=>{
        this.hotelEnc=response.hotelEncontrado;
        console.log(response.hotelEncontrado);
      },error=>{
        console.log(<any>error);
      }
    )
  }

  facturar(){
    this._hotelesService.facturar().subscribe(
      response=>{
        this.facturacion=response.facturaGuardada;
        console.log(response.facturaGuardada);
      }, error=>{
        console.log(<any>error)
      }
    )

  }



}
