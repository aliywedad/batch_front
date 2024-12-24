import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { DataService } from '../../services/DataService';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent  implements OnInit{
  dataList: any = [
    {
      datetime: '2024-12-27:09',
      temp: 79.5,
      app_temp: 79.7,
      snow: 0.0,
      solar_rad: 895.25476,
      wind_gust_spd: 8.5,
      pop: 15.0,
      ozone: 263.0,
      clouds_hi: 100,
      clouds_low: 0,
      timestamp_utc: '2024-12-27T09:00:00',
      wind_cdir: 'NNW',
      rh: 57,
      pod: 'd',
      pres: 881,
      snow_depth: 0.0,
      clouds: 42,
      vis: 14.9,
      wind_spd: 5.7,
      wind_cdir_full: 'north-northwest',
      slp: 1005,
      timestamp_local: '2024-12-27T10:00:00',
      ts: '1735290000',
      dni: 981.0,
      dewpt: 63.0,
      uv: 7.0,
      clouds_mid: 42,
      wind_dir: 350,
      ghi: 986.0,
      dhi: 123.0,
      precip: 0.001,
      weather: {
        icon: 'c03d',
        description: 'Broken clouds',
        code: 803,
      },
    }
  ];

  constructor(private weatherService: DataService) {}

  ngOnInit(): void {
    this.loadWeatherData();
  }
  loadWeatherData(): void {
    const { latitude, longitude } = this.selectedRegion;
    
    this.weatherService.getWeatherData(latitude.toString(), longitude.toString()).subscribe(
      (data) => {
        this.dataList = data;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }




  regtions: any[] = [
    {
      value: 'region1', 
      viewValue: 'Nouakchott', 
      latitude: -15.983381, 
      longitude: 18.120686, 
      altitude: 5 // Altitude is approximate in meters above sea level
    },
    {
      value: 'region2', 
      viewValue: 'Nouadhibou', 
      latitude: 20.9319, 
      longitude: -17.0333, 
      altitude: 11
    },
    {
      value: 'region3', 
      viewValue: 'Atar', 
      latitude: 20.5128, 
      longitude: -13.0394, 
      altitude: 240
    },
    {
      value: 'region4', 
      viewValue: 'Kiffa', 
      latitude: 15.6501, 
      longitude: -11.6004, 
      altitude: 436
    },
    {
      value: 'region5', 
      viewValue: 'Kaédi', 
      latitude: 16.1847, 
      longitude: -14.0299, 
      altitude: 36
    },
    {
      value: 'region6', 
      viewValue: 'Zouérat', 
      latitude: 27.0150, 
      longitude: -12.4689, 
      altitude: 702
    },
    {
      value: 'region7', 
      viewValue: 'Rosso', 
      latitude: 16.5033, 
      longitude: -15.975, 
      altitude: 20
    }
  ];


  
selectedRegion: {
    value: string;
    viewValue: string;
    latitude: number;
    longitude: number;
    altitude: number;
  
  }= this.regtions[0];

  
}
