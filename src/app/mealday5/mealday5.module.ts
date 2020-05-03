import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mealday5PageRoutingModule } from './mealday5-routing.module';

import { Mealday5Page } from './mealday5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mealday5PageRoutingModule
  ],
  declarations: [Mealday5Page]
})
export class Mealday5PageModule {}
