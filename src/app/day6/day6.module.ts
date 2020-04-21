import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Day6PageRoutingModule } from './day6-routing.module';

import { Day6Page } from './day6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Day6PageRoutingModule
  ],
  declarations: [Day6Page]
})
export class Day6PageModule {}
