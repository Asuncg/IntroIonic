import { Component, OnInit } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  private tempFormData: any = {};
  constructor(private alertController: AlertController, private toastController: ToastController) {};

  ngOnInit() {
    console.log(this.games);
  }

  games: Game[] = [
    {
      title: 'World Of Warcraft',
      game_url: 'link',
      genre: 'MMO',
    },
    {
      title: 'Minecraft',
      game_url: 'link',
      genre: 'sandbox',
    },
    {
      title: 'Lost Ark',
      game_url: 'link',
      genre: 'MMO',
    },
  ]

  inputs4alert: any[] = [
    {
      name: 'title',
      placeholder: 'Title',
    },
    {
      name: 'game_url',
      placeholder: 'Game URL',
    },
    {
      name: 'genre',
      placeholder: 'Genre',
    },
  ];

  buttons4Alert: AlertButton[] = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Ok',
      role: 'ok',
      handler: (data) => {
        this.handleOkClick(data);
        return false;      }
    },
  ]

  async onClickAlert() {
    const alert = await this.alertController.create({
      header: 'Add juego',
      buttons: this.buttons4Alert,
      backdropDismiss: true,
      keyboardClose: false,
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: this.tempFormData.title || '',
        },
        {
          name: 'game_url',
          placeholder: 'Game URL',
          value: this.tempFormData.game_url || '',
        },
        {
          name: 'genre',
          placeholder: 'Genre',
          value: this.tempFormData.genre || '',
        },
      ],
    });
    await alert.present();
    const result = await alert.onDidDismiss();

    if (result.role !== "ok") {
      console.log("Insertion cancelled.");
      await this.insertGameCancelToast('bottom');
    }
  }

  async handleOkClick(data: any) {
    if (this.isGameDuplicate(data)) {
      this.tempFormData = data;
      await this.insertGameFailToast('bottom');
    } else {
      this.tempFormData = {};
      this.addGame(data);
      this.alertController.dismiss();
      await this.insertGameToast('bottom');

    }
  }

  addGame(data: any) {
    const newGame: Game = {
      title: data.title,
      game_url: data.game_url,
      genre: data.genre,
    };

    this.games.push(newGame);
    console.log('New game: ', newGame);
    console.log(this.games);
  }
  
  isGameDuplicate(newGameData: any): boolean {
    return this.games.some(game => game.title.toLowerCase() === newGameData.title.toLowerCase());
  }

  async insertGameToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Game added',
      duration: 1000,
      position: position,
    });
    await toast.present();
  }
  async insertGameFailToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Game already exists',
      duration: 1000,
      position: position,
    });
    await toast.present();
  }
  async insertGameCancelToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Insertion cancelled',
      duration: 1000,
      position: position,
    });
    await toast.present();
  }
}

class Game {
  title: string = "";
  game_url: string = "";
  genre: string = "";
}