import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { DataService } from '../../services/DataService';
import { CommonModule } from '@angular/common';

interface Region {
  value: string;
  viewValue: string;
  latitude: number;
  longitude: number;
  altitude: number;
}

@Component({
  selector: 'app-chart',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  dataList: any[] = [
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
	
  ]; // Ensure it's initialized as an empty array
  datanumber: number = 0;

  regions: Region[] = [
    {
      value: 'region1',
      viewValue: 'Nouakchott',
      latitude: 18.134416,
      longitude: -15.985634,
      altitude: 5
    },
    {
      value: 'region2',
      viewValue: 'Nouadhibou',
      latitude: 20.968061,
      longitude: -17.034260,
      altitude: 11
    },
    // other regions...
  ];

  selectedRegion: Region = this.regions[0];

  constructor(private weatherService: DataService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createLineChart();
    // this.loadWeatherData();
  }

  loadWeatherData(): void {
    const { latitude, longitude } = this.selectedRegion;
    
    this.weatherService.getWeatherData(latitude.toString(), longitude.toString()).subscribe(
      (data) => {
        try {
          this.dataList = data; // This should be assigned safely
          this.datanumber = this.dataList.length;
          this.createLineChart(); // Update chart after data is loaded
        } catch (e) {
          console.error('Error parsing data:', e);
        }
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

  onchangeSelectedRegion(Region: Region): void {
    this.selectedRegion = Region;
    this.loadWeatherData(); // Re-fetch data for the selected region
  }

  createLineChart(): void {
    // Ensure the dataList is not null or empty before using it
    if (!this.dataList || this.dataList.length === 0) {
      console.log('No data available for the chart');
      return; // Exit early if there's no data
    }

    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;

    const labels = this.dataList.map((data) => data.datetime); // Extract datetime as labels
    const temperatures = this.dataList.map((data) => data.temp); // Extract temperature for the dataset

    new Chart(ctx, {
      type: 'line' as ChartType,
      data: {
        labels: labels, // labels dynamically populated from dataList
        datasets: [
          {
            label: 'Temperature',
            data: temperatures, // dataset dynamically populated from dataList
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 2,
            tension: 0.4, // Adds a smooth curve to the line
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Temperature (°C)',
            },
            beginAtZero: true,
          },
        },
      },
    });
  }
}
