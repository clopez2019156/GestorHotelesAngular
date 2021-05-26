import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers: [HotelesService]
})
export class EventosComponent implements OnInit {
  public eventos;

  constructor(public _hotelesService: HotelesService) { }

  ngOnInit(): void {
  }

}
