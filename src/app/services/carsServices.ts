import { Injectable } from '@angular/core';

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

  constructor() {}

  getData() {
    return this.data; // Renvoie les données stockées
  }

  setData(newData: any[]) {
    this.data = newData; // Met à jour les données
  }
}
