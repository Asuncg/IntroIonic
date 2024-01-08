import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // private _storage: Storage | null = null;

  constructor(private _storage: Storage) {
    this.init();
  }

  async init() {
    try {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      this._storage = await this._storage.create();

      console.log("DB Connection OK");
    } catch (err) {
      console.log(err);
    }

  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string) {
    const tmp = await this._storage?.get(key);
    return tmp;
  }

  public async remove(key: string) {
    await this._storage?.remove(key);
  }

}
