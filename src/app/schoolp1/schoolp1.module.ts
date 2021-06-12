import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Schoolp1PageRoutingModule } from './schoolp1-routing.module';

import { Schoolp1Page } from './schoolp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Schoolp1PageRoutingModule
  ],
  declarations: [Schoolp1Page]
})
export class Schoolp1PageModule {}
