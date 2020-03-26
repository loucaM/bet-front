import { Component, OnInit } from '@angular/core';
import { Athlete } from './athletes/athlete.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

athletes: Athlete[] = [
    new Athlete('Vicaut', 'Jimmy', 'https://image.flaticon.com/icons/svg/197/197560.svg'),
    new Athlete('Bolt','Usain','https://image.flaticon.com/icons/svg/197/197611.svg')  ]

  constructor() { }

  ngOnInit(): void {
  }

}
