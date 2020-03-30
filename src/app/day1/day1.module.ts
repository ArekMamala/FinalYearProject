import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Day1PageRoutingModule } from './day1-routing.module';

import { Day1Page } from './day1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Day1PageRoutingModule
  ],
  declarations: [Day1Page]
})
export class Day1PageModule {}
