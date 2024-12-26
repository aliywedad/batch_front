import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root', // Permet d'enregistrer ce service au niveau global
})
export class DataService {
  private data: any[] = [
    {
      id: 1,
      name: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: 30000,
    }
  ]; 
  private apiUrl = 'http://localhost:9090/weather';  
  private apiUrl2 = 'http://localhost:9090/weather/csv'; 

  httpClient=inject(HttpClient)

  getWeatherData(latitude: string, longitude: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}?latitude=${latitude}&longitude=${longitude}`)
    
    
    ;
  } 
  downloadWeatherData() {
    this.httpClient.get<any>(`${this.apiUrl2}`).subscribe(
      (response) => {
        console.log(response);   
      },
      (error) => {
        console.error('Error fetching weather data:', error);  
      }
    );
  
    console.log('API URL:', this.apiUrl2);  
  }
   




//   getWeatherData(latitude: string, longitude: string) {
//     this.httpClient.get<any>(`${this.apiUrl}?latitude=${latitude}&longitude=${longitude}`)
   
//    .subscribe((res: any) => {
//      console.log(res);
//      return res;
//    })
//    ;
//  } 
  // setData(newData: any[]) {
  //   this.data = newData; // Met à jour les données
  // }
}
