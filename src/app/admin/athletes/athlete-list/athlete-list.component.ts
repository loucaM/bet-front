import { Component, OnInit } from '@angular/core';
import { Athlete } from '../athlete.model';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.sass']
})
export class AthleteListComponent implements OnInit {

  athletes: Athlete[] = [
    new Athlete('Vicaut', 'Jimmy', 'https://image.flaticon.com/icons/svg/197/197560.svg'),
    new Athlete('Bolt','Usain','https://image.flaticon.com/icons/svg/197/197611.svg')  ]
  constructor() { }

  ngOnInit(): void {
  }

}
