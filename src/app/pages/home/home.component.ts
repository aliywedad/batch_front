import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
 
import { NavebarComponent } from '../../components/navebar/navebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/carsServices';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../components/chart/chart.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NavebarComponent,MatSidenavModule, MatButtonModule
,CommonModule
,ChartComponent

  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any[] = [];
  constructor(private dataService: DataService) {

    this.data = this.dataService.getData();
  }
  showFiller = true;
  
  dataList: any=[
    { x: 0, y: 45 },
    { x: 1, y: 78 },
    { x: 2, y: 56 },
    { x: 3, y: 89 },
    { x: 4, y: 12 },
    { x: 5, y: 34 },
    { x: 6, y: 76 },
    { x: 7, y: 53 },
    { x: 8, y: 90 },
    { x: 9, y: 23 },
    { x: 10, y: 67 },
    { x: 11, y: 48 },
    { x: 12, y: 52 },
    { x: 13, y: 82 },
    { x: 14, y: 33 },
    { x: 15, y: 62 },
    { x: 16, y: 11 },
    { x: 17, y: 84 },
    { x: 18, y: 43 },
    { x: 19, y: 70 }
  ];
  
  
}
