import { Component } from '@angular/core';
import { DataService } from '../../services/DataService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-extract',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.css'
})
export class ExtractComponent {
  constructor(private weatherService: DataService) {}


downloadFile() {
  // Code pour télécharger le fichier Excel
  this.weatherService.downloadWeatherData();

}


}
