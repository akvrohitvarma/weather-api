import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-api';
  city="";
  scity="";
  humidity="";
  feelslike="";
  min_temp="";
  max_temp="";
  pressure="";
  temps:any;
  constructor(private wdata:WeatherDataService){
    this.wdata.getdata("Visakhapatnam").subscribe(data=>{
      console.log("data ",data);
      var obj = JSON.parse(JSON.stringify(data));
      this.temps = obj.main.temp;
      this.city = obj.name;
      this.humidity = obj.main.humidity;
      this.feelslike = obj.main.feels_like;
      this.min_temp = obj.main.temp_min;
      this.max_temp = obj.main.temp_max;
      this.pressure = obj.main.pressure;
    });
  }

  ongo(){
    this.wdata.getdata(this.scity).subscribe(data=>{
      console.log("data ",data);
      var obj = JSON.parse(JSON.stringify(data));
      this.temps = obj.main.temp;
      this.city = obj.name;
      this.humidity = obj.main.humidity;
      this.feelslike = obj.main.feels_like;
      this.min_temp = obj.main.temp_min;
      this.max_temp = obj.main.temp_max;
      this.pressure = obj.main.pressure;
    });
  }
}

/*
{"coord":{"lon":81.7833,"lat":16.9833},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":27.13,"feels_like":28.32,"temp_min":27.13,"temp_max":27.13,"pressure":1013,"humidity":61},"visibility":5000,"wind":{"speed":3.09,"deg":100},"clouds":{"all":20},"dt":1643175630,"sys":{"type":1,"id":9225,"country":"IN","sunrise":1643159121,"sunset":1643199902},"timezone":19800,"id":1258932,"name":"Rajahmundry","cod":200}
*/