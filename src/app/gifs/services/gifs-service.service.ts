import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Este servicio estará disponible en toda la aplicación
})
export class GifsServiceService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'gu3Vy8xgg6kifgQ571WCF1fpduDZQ1X2';

  constructor(private http: HttpClient) { } // Inyección de HttpClient

  get getTagsHistory() {
    return [...this._tagsHistory]; // Devuelve una copia del historial de tags
  }

  private historyTag(tag: string): void {
    tag = tag.toLowerCase(); // Convierte el tag a minúsculas
    if (this._tagsHistory.includes(tag)) {
      // Si el tag ya existe, lo elimina del historial
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag); // Agrega el nuevo tag al principio
    this._tagsHistory = this._tagsHistory.slice(0, 10); // Mantiene solo los últimos 10 tags
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return; // Si el tag está vacío, no hace nada
    this.historyTag(tag); // Actualiza el historial de tags

    // Realiza la solicitud GET a la API de Giphy
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=2`)
      .subscribe(resp => {
        console.log(resp); // Muestra la respuesta en la consola
      });
  }
}
