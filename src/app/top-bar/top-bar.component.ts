import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  public links = [
    { title: 'Temperature', fragment: 'temperature' },
    { title: 'Forecast', fragment: 'forecast' },
    { title: 'Radar', fragment: 'radar' }
  ];

  constructor(public route: ActivatedRoute) { }
}