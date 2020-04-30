import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mealday2PageRoutingModule } from './mealday2-routing.module';

import { Mealday2Page } from './mealday2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mealday2PageRoutingModule
  ],
  declarations: [Mealday2Page]
})
export class Mealday2PageModule {}
