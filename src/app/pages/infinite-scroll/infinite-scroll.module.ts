import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollPageRoutingModule } from './infinite-scroll-routing.module';

import { InfiniteScrollPage } from './infinite-scroll.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [InfiniteScrollPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfiniteScrollPageRoutingModule,
        ComponentsModule
    ]
})
export class InfiniteScrollPageModule {}
