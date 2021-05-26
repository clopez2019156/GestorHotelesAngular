import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  providers: [HotelesService, UsuarioService]
})
export class ReservasComponent implements OnInit {
  public reservacionesPropias;

  constructor(public _hotelesService: HotelesService,
    public _usuariosService: UsuarioService) { }

  ngOnInit(): void {
this.verReservaciones();
  }

  verReservaciones(){
    this._hotelesService.verReservaciones().subscribe(
      response=>{
        this.reservacionesPropias=response.reservacionesEcontradas;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  cancelarReservacion(id){
    this._hotelesService.cancelarReservacion(id).subscribe(
      response=>{
        console.log(response)
      },error=>{
        console.log(<any>error)
      }
    )
  }



}
