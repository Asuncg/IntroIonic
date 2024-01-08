import { Component, OnInit } from '@angular/core';
import { ActionSheetButton, ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  buttons4ActionSheet: ActionSheetButton[] = [
    {
      text: 'OK',
      role: 'destructive',
      data: {
        action: 'delete'
      },
      icon: 'trash',
      cssClass: 'red-color',
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel'
      },
      icon: 'arrow-undo',
      cssClass: 'blue-color',
    },
  ];

  constructor(private _actionSheetCTRL: ActionSheetController,
              private _toastController: ToastController) { }

  ngOnInit() {
  }

  onClickASI(ev: any) {
    console.log(ev.detail);
  }

  async onClickASC() {
    const actionSheet = await this._actionSheetCTRL.create({
      header: 'Eliminar registro',
      subHeader: 'Esta accion no se puede deshacer',
      backdropDismiss: true,
      buttons: this.buttons4ActionSheet,
    });

    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();
    console.log(result);

    let message = "";
    let position: any = "top";
    if (result.role === "backdrop") {
      console.log("No ha seleccionado opcion");
      message = "No ha seleccionado opcion";
      position = 'top';
    } else {
      console.log(result.data.action);
      if (result.data.action === "delete") {
        message = "Registro eliminado";
        position = 'middle';
      } else {
        message = "Cancelado por el usuario";
        position = 'bottom';
      }
    }

    const toast = await this._toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });
    await toast.present();
  }

}
