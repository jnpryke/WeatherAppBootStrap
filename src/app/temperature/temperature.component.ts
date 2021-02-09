import { Component, OnInit } from '@angular/core';
import IWeatherResponse from '../models/weather-model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  public temperature: number = null

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataService.getWeather().subscribe((res: IWeatherResponse) => {
      this.temperature = res.main.temp;
    });
  }
}
