import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
  providers:[HotelesService]
})
export class HabitacionesComponent implements OnInit {

  constructor(
    public _hotelesService: HotelesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

}
