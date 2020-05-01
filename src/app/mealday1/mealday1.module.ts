import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mealday1PageRoutingModule } from './mealday1-routing.module';

import { Mealday1Page } from './mealday1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mealday1PageRoutingModule
  ],
  declarations: [Mealday1Page]
})
export class Mealday1PageModule {}
