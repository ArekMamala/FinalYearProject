import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mealday6PageRoutingModule } from './mealday6-routing.module';

import { Mealday6Page } from './mealday6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mealday6PageRoutingModule
  ],
  declarations: [Mealday6Page]
})
export class Mealday6PageModule {}
