import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mealday7PageRoutingModule } from './mealday7-routing.module';

import { Mealday7Page } from './mealday7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mealday7PageRoutingModule
  ],
  declarations: [Mealday7Page]
})
export class Mealday7PageModule {}
