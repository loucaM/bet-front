import { Component, OnInit } from '@angular/core';
import { Athlete } from './athletes/athlete.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
