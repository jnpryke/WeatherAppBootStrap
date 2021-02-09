import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { RadarComponent } from './radar/radar.component';
import { TemperatureComponent } from './temperature/temperature.component';


const routes: Routes = [
  {
    path: 'temperature',
    component: TemperatureComponent,
  },
  {
    path: 'forecast',
    component: ForecastComponent,
  },
  {
    path: 'radar',
    component: RadarComponent,
  },
  {
    path: '',
    redirectTo: 'temperature',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'temperature',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
