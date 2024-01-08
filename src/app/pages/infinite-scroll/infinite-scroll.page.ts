import { Component, OnInit, ViewChild } from '@angular/core';

import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { Personaje } from 'src/app/model/Personaje';
import { StarWarService } from 'src/app/services/starwar.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  items: String[] = [];
  personajes: Personaje[] = [];

  @ViewChild('infinite') infinite!: IonInfiniteScroll;

  constructor (private _starWarService: StarWarService) { }

  async ngOnInit() {
    let datos = await this._starWarService.getPersonajes();
    console.log(datos);
    this.personajes.push(...datos.results);
    datos = await this._starWarService.getPersonajes();
    console.log(datos);
    this.personajes.push(...datos.results);
  }

  async onIonInfinite() {
    console.log("Cargando...");
    try {
      let datos = await this. _starWarService.getPersonajes();
      console.log(datos);
      this.personajes.push(...datos.results);
      this.infinite.complete();
    } catch (error) {
      console.log("ERROR recibiendo personajes.")
      this.infinite.complete();
      this.infinite.disabled = true;
    }
  }

}
