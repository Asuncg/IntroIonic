import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, ImageOptions } from '@capacitor/camera';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  private imageOptionsCamera: ImageOptions = {
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri
  }

  constructor(private _storageService: LocalStorageService) { }

  ngOnInit() {
  }

  async onClickCamera() {
    const image = await Camera.getPhoto(this.imageOptionsCamera);
    this._storageService.set("imagen", image.webPath)
  }

  onClickGallery() {

  }
}
