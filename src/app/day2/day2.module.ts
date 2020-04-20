import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Day2PageRoutingModule } from './day2-routing.module';

import { Day2Page } from './day2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Day2PageRoutingModule
  ],
  declarations: [Day2Page]
})
export class Day2PageModule {}
