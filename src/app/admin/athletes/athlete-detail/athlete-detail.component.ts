import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-athlete-detail',
  templateUrl: './athlete-detail.component.html',
  styleUrls: ['./athlete-detail.component.sass']
})
export class AthleteDetailComponent implements OnInit {

  @Input()
  athlete

  constructor() { }

  ngOnInit(): void {
  }

}
