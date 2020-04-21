import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Day7PageRoutingModule } from './day7-routing.module';

import { Day7Page } from './day7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Day7PageRoutingModule
  ],
  declarations: [Day7Page]
})
export class Day7PageModule {}
