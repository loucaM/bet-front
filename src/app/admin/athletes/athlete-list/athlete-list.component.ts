import { Component, OnInit, Input} from '@angular/core';
import { Athlete } from '../athlete.model';
import { AthletesService } from 'src/app/shared/athlete.service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.sass']
})
export class AthleteListComponent implements OnInit {

 selectedAthlete: Athlete;

  constructor(private athletesService: AthletesService) { }

  ngOnInit(): void {
    this.athletesService.athleteSelected.subscribe(
      (athlete: Athlete) => {
        this.selectedAthlete = athlete;
      }
    )
  }
}
