import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherPageRoutingModule } from './refresher-routing.module';

import { RefresherPage } from './refresher.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [RefresherPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RefresherPageRoutingModule,
        ComponentsModule
    ]
})
export class RefresherPageModule {}
