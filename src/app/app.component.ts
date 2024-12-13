import { Component } from '@angular/core';
import { WeatherDashboardComponent } from "./components/weather-dashboard/weather-dashboard.component";

@Component({
  selector: 'app-root',
  imports: [WeatherDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-dashboard-test';
}
