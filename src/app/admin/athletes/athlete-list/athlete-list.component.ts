import { Component, OnInit, Input} from '@angular/core';
import { Athlete } from '../athlete.model';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.sass']
})
export class AthleteListComponent implements OnInit {

  @Input('athlete') athlete: Athlete;

  constructor() { }

  ngOnInit(): void {
  }

}
