import { Component, OnInit, OnDestroy } from '@angular/core';
import IWeatherResponse from '../models/weather-model';
import { DataService } from '../services/data.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit, OnDestroy {
  public temperature: number = null
  private isAlive: boolean = true;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.isAlive = false;
  }

  public getTemperature() {
    this.dataService.getWeather()
      .pipe(takeWhile((_) => this.isAlive))
      .subscribe((res: IWeatherResponse) => {
        this.temperature = res.main.temp;
      });
  }
}
