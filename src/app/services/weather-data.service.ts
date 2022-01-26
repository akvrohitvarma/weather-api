import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(public data:HttpClient) { }
  getdata(cityname:string){
    return this.data.get('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&units=metric&appid=284a9239a736c79386472332a4de0628')
  }
}
