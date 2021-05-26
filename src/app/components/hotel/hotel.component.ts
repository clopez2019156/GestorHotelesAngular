import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  providers:[HotelesService]
})
export class HotelComponent implements OnInit {


  constructor(public _hotelesService: HotelesService,
    private _router: Router) {


  }

  ngOnInit(): void {
  }


}
