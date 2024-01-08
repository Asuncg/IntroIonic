import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos } from '../model/Personaje';

@Injectable({
  providedIn: 'root'
})
export class StarWarService {

  private url: string ="https://swapi.dev/api/people";
  private numPage: number = 1;

  private itemPerPage: number = 10;
  private maxPersonaje: number = Number.MAX_SAFE_INTEGER;

  constructor(private _http: HttpClient) { }

  getPersonajes() {
    if (this.maxPersonaje > (this.numPage-1) * this.itemPerPage) {
      return new Promise<Datos>((resolve, reject) => {
        this._http.get<Datos>(`${this.url}?page=${this.numPage}`).subscribe({
          next: (datos) => {
            this.numPage++;
            this.maxPersonaje = datos.count;
            resolve(datos);
          },
          error(err) {
            console.log("Error en solicitud");
            reject(err.message);
          }
        });
      });
    } else {
      return new Promise<Datos>((resolve, reject) => {
        reject("No hay mas elementos en la lista.");
      });
    }
  }

}
