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
  ]; // Propriété pour stocker des données

  // constructor() {}
  private apiUrl = 'http://localhost:9090/weather'; // Replace with your backend endpoint

  httpClient=inject(HttpClient)

  getWeatherData(latitude: string, longitude: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}?latitude=${latitude}&longitude=${longitude}`)
    
    
    ;
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
