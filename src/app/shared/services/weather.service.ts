import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = environment.apiUrl;
  private api_key = environment.apiKey;

  constructor(private http: HttpClient) { }

  getWeather(city: any): Observable<any> {
    return this.http.get(`${this.url}?q=${city}&appid=${this.api_key}&units=metric`);
  }
}
