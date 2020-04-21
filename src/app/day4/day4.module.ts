import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Day4PageRoutingModule } from './day4-routing.module';

import { Day4Page } from './day4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Day4PageRoutingModule
  ],
  declarations: [Day4Page]
})
export class Day4PageModule {}
