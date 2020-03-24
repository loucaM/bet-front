import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Athlete } from './athlete.model';

    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

@Injectable()
export class AthletesService {
athleteUrl = 'api/heroes';

constructor(private http: HttpClient){}

addAthlete (athlete: Athlete): Observable<Athlete> {
    return this.http.post<Athlete>(this.athleteUrl, athlete, httpOptions);
  }
}