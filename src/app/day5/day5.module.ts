import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Day5PageRoutingModule } from './day5-routing.module';

import { Day5Page } from './day5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Day5PageRoutingModule
  ],
  declarations: [Day5Page]
})
export class Day5PageModule {}
