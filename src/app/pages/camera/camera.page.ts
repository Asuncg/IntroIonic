import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  public image : any;

  private imageOptionsCamera: ImageOptions = {
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    saveToGallery: true,
  }

  private imageOptionsGallery: ImageOptions = {
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Photos
  }

  constructor(private _storageService: LocalStorageService) { }

  ngOnInit() {
    this.image = this._storageService.get("imagen")
  }

  async onClickCamera() {
    const permisions = await Camera.checkPermissions();
    if (permisions.camera) {
    const image = await Camera.getPhoto(this.imageOptionsCamera);
    this.image = this._storageService.set("imagen", image.webPath);
    this.image = image.webPath;
  } else {
    console.log("No tienes acceso a la cámara")
  }
}

 async onClickGallery() {
    const permisions = await Camera.checkPermissions();
    if (permisions.photos) {
    const image = await Camera.getPhoto(this.imageOptionsGallery);
    this.image = this._storageService.set("imagen", image.webPath);
    this.image = image.webPath;
  } else {
    console.log("No tienes acceso a la galería")
  }
  }
}
