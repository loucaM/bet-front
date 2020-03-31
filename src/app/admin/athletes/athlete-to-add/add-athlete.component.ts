import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AthletesService } from '../../../shared/athlete.service';
import { Athlete } from '../athlete.model';

@Component({
  selector: 'app-add-athlete',
  templateUrl: './add-athlete.component.html',
  styleUrls: ['./add-athlete.component.sass']
})
export class AddAthleteComponent implements OnInit {
  form: FormGroup;
  athleteForm;
  athlete: Athlete;

  constructor(private formBuilder: FormBuilder, private athletesService: AthletesService) {
    this.athleteForm = this.formBuilder.group({
      firstname: '',
      name: '',
      country: ''
    });
  }

  ngOnInit() {
  }

  add(name: string): void {
    this.athletesService
      .addAthlete(this.athlete)
    //.subscribe(hero => this.et.push(hero));
  }


}
