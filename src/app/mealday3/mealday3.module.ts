import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mealday3PageRoutingModule } from './mealday3-routing.module';

import { Mealday3Page } from './mealday3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mealday3PageRoutingModule
  ],
  declarations: [Mealday3Page]
})
export class Mealday3PageModule {}
