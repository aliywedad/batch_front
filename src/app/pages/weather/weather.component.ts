import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { DataService } from '../../services/DataService';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule here


interface Region {
  value: string;
  viewValue: string;
  latitude: number;
  longitude: number;
  altitude: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  imports: [CommonModule,FormsModule],
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
    },
  ];

  constructor(private weatherService: DataService) {}

  ngOnInit(): void {
    // this.loadWeatherData();
  }
  loadWeatherData(): void {
    const { latitude, longitude } = this.selectedRegion;
    
    this.weatherService.getWeatherData(latitude.toString(), longitude.toString()).subscribe(
      (data) => {
        try{
          this.dataList = data;

        }catch(e){}
        
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }




  regions:  Region[] = [
    {
      value: 'region1', 
      viewValue: 'Nouakchott', 
      latitude: 18.134416, 
      longitude:  -15.985634, 
      altitude: 5 // Altitude is approximate in meters above sea level
    },
    {
      value: 'region2', 
      viewValue: 'Nouadhibou', 
      latitude: 20.968061, 
      longitude: -17.034260, 
      altitude: 11
    },
    {
      value: 'region3', 
      viewValue: 'Atar', 
      latitude: 20.503652,
      longitude:  -13.063813, 
      altitude: 240
    },
    {
      value: 'region4', 
      viewValue: 'Kiffa', 
      latitude: 16.618179,
      longitude:  -11.407972, 
      altitude: 436
    },
    {
      value: 'region5', 
      viewValue: 'Kaédi', 
      latitude: 16.168304,  
      longitude: -13.494200, 
      altitude: 36
    },
    {
      value: 'region6', 
      viewValue: 'Zouérat', 
      latitude: 22.735372, 
      longitude: -12.472736 , 
      altitude: 702
    },
    {
      value: 'region7', 
      viewValue: 'Rosso', 
      latitude: 16.514981,
      longitude:  -15.804842, 
      altitude: 20
    }
  ];


  
selectedRegion: {
    value: string;
    viewValue: string;
    latitude: number;
    longitude: number;
    altitude: number;
  
  }
  = this.regions[0];
  onchangeSelectedRegion(Region: Region): void {
    console.log(Region);
    console.log(Region.viewValue);
    console.log(this.selectedRegion.viewValue);
    // this.selectedRegion = Region;
  }
  // onchangeSelectedRegion(): void {
  //   // Log the selected region when selection changes
  //   console.log('Selected region:', this.selectedRegion.viewValue);
  // }
  onSearch() {
    console.log('Search button clicked with region:', this.selectedRegion);
    // Add logic to handle search based on the selected region
  }
  logging(event: any) {
    console.log(event.target.value);
    console.log(this.selectedRegion.viewValue);
    this.selectedRegion = this.regions.find(region => region.viewValue === event.target.value) || this.regions[0];
    console.log(this.selectedRegion.viewValue);

    // this.loadWeatherData();

  }
  
}
