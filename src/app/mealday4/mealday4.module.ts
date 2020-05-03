import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mealday4PageRoutingModule } from './mealday4-routing.module';

import { Mealday4Page } from './mealday4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mealday4PageRoutingModule
  ],
  declarations: [Mealday4Page]
})
export class Mealday4PageModule {}
