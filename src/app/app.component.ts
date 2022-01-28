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
  error:any;
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
    },(error) => {
      console.log(error)
      this.error = error
    })
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
    },(error) => {
      console.log(error)
      alert("The City which you entered does not exist!!")
      this.error = error
    })
  }
}