import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IWeatherResponse from '../models/weather-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private route = 'http://api.openweathermap.org/data/2.5/weather';
  private apiToken = '086d6b3d8a8758fdbe924a375ae44a59';
  private city = 'warsaw,us';

  constructor(private http: HttpClient) { }

  public getWeather(): Observable<IWeatherResponse> {
    return this.http.get<IWeatherResponse>(this.route + '?q=' + this.city + '&APPID=' + this.apiToken);
  }
}
