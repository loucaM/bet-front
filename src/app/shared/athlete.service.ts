import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Athlete } from '../admin/athletes/athlete.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({ providedIn: 'root' })
export class AthletesService {

athletesChanged = new EventEmitter<Athlete[]>();
addOneAthlete(athlete: Athlete) {
  return this.athletesChanged.emit(this.athletes.slice());
}

  athleteSelected = new EventEmitter<Athlete>();

  private athletes: Athlete[] = [
    new Athlete('Vicaut', 'Jimmy', 'https://image.flaticon.com/icons/svg/197/197560.svg'),
    new Athlete('Bolt', 'Usain', 'https://image.flaticon.com/icons/svg/197/197611.svg')
  ]

  getAthletes() {
    return this.athletes.slice();
  }

  athleteUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  addAthlete(athlete: Athlete): Observable<Athlete> {
    return this.http.post<Athlete>(this.athleteUrl, athlete, httpOptions);
  }
}