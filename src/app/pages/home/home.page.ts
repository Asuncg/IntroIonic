import { Component, OnInit } from '@angular/core';
import { ComponentClass } from 'src/app/model/ComponentClass';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public components: ComponentClass[] = [
    {
      name: "Action Sheet",
      path: "/action-sheet",
      color: "primary",
      icon: "airplane",
    },
    {
      name: "Alert",
      path: "/alert",
      color: "secondary",
      icon: "alarm",
    },
    {
      name: "Card",
      path: "/card",
      color: "tertiary",
      icon: "albums",
    },
    {
      name: "Infinite scroll",
      path: "/infinite-scroll",
      color: "dark",
      icon: "infinite",
    },
    {
      name: "Refresher",
      path: "/refresher",
      color: "danger",
      icon: "refresh",
    },
    {
      name: "Cámara",
      path: "/camera",
      color: "success",
      icon: "camera",
    },
  ];

  constructor(private _localStorageService: LocalStorageService) { }

  async ngOnInit() {
    //Almacena el valor
    await this._localStorageService.set("key01", "value01");
    await this._localStorageService.set("key02", this.components);

    //Recupera un valor y lo muestra
    let tmp = await this._localStorageService.get("key01");
    console.log(tmp);

    //Eliminar valor
    await this._localStorageService.remove("key01");
    tmp = await this._localStorageService.get("key01");
    console.log("Despues: " + tmp);
  
  }

}
