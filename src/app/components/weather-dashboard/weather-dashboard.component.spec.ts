import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherDashboardComponent } from './weather-dashboard.component';
import { WeatherService } from '../../shared/services/weather.service';

describe('WeatherDashboardComponent', () => {
  let component: WeatherDashboardComponent;
  let fixture: ComponentFixture<WeatherDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message if input is empty', () => {
    component.weatherSearch.setValue({ city: '' });
    component.onSearch();

    expect(component.errorMessage).toBe(`The field is empty. Please enter a city name.`);
  });

  it('should show error message if the city is already displayed', () => {
    const сity = 'Lviv';
    const weatherData = {
      name: сity,
      city: сity,
      dt: 1639084800,
      main: { temp: 1 },
      weather: [{ description: 'clear sky' }],
      list: [],
    };

    component.weatherData = [{ ...weatherData }];
    component.weatherSearch.setValue({ city: сity });
    component.onSearch();

    expect(component.errorMessage).toBe(`The weather data for "${сity}" is already displayed.`);
  });

  it('a new city completed successfully', () => {
    spyOn(localStorage, 'setItem');

    component.weatherSearch.setValue({ city: 'Kyiv' });
    component.onSearch();

    expect(component.weatherData.length).toBe(1);
    expect(component.weatherData[0].name).toBe('Kyiv');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  afterEach(() => {
    localStorage.clear();
  });

});
