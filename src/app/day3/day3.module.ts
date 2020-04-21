import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Day3PageRoutingModule } from './day3-routing.module';

import { Day3Page } from './day3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Day3PageRoutingModule
  ],
  declarations: [Day3Page]
})
export class Day3PageModule {}
