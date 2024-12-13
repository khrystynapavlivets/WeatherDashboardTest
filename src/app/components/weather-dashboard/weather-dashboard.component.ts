import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../../shared/services/weather.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';


interface Weather {
  date?: Date;
  dt: number;
  list: any;
  city: string;
  name: string;
  main: { temp: number };
  weather: Array<{ description: string }>;
}

@Component({
  selector: 'app-weather-dashboard',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weather-dashboard.component.html',
  styleUrl: './weather-dashboard.component.scss'
})
export class WeatherDashboardComponent {

  public weatherSearch!: FormGroup;
  public weatherData!: Weather[];
  public city!: any;
  public errorMessage: string | null = null;

  constructor(private weatherService: WeatherService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.weatherSearch = this.fb.group({
      city: ['', Validators.required],
    });
  }


  ngOnInit() {
    const savedCities = JSON.parse(localStorage.getItem('weatherCities') || '[]');
    this.weatherData = savedCities;
  }


  onSearch() {
    const city = this.weatherSearch.get('city')?.value;
    this.errorMessage = '';
    if (city) {
      if (this.weatherData.some((weather: any) => weather.name.toLowerCase() === city.toLowerCase())) {
        this.errorMessage = `The weather data for "${city}" is already displayed.`;
        return;
      }
      this.weatherService.getWeather(city).subscribe({
        next: (data) => {
          if (!this.weatherData.some((weather) => weather.name === data.name)) {

            const weatherDate = {
              ...data,
              date: new Date(data.dt * 1000),
            };
            this.weatherData.push(weatherDate)

            let savedCities = JSON.parse(localStorage.getItem('weatherCities') || '[]');
            savedCities.push(weatherDate);
            localStorage.setItem('weatherCities', JSON.stringify(savedCities));

            this.weatherSearch.reset();
          }
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = `Location "${city}" not found. Please try another city.`;
        }
        ,
        complete: () => {
          return this.openDialog();
        }
      });
    }
    else {
      this.errorMessage = `The field is empty. Please enter a city name.`;
    }
  }


  onRemoveCity(cityToRemove: any) {
    this.weatherData = this.weatherData.filter(weather => weather.name !== cityToRemove.name);
    let storedCities = JSON.parse(localStorage.getItem('weatherCities') || '[]');
    storedCities = storedCities.filter((storedCity: any) => storedCity.name !== cityToRemove.name);
    localStorage.setItem('weatherCities', JSON.stringify(storedCities));
  }

  openDialog() {
    this.dialog.open(SuccessDialogComponent, {
      width: '300px',
      data: { message: 'Request completed successfully' },
    });
  }
}
