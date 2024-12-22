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
  
















  
}
