import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalDetailsPageRoutingModule } from './cal-details-routing.module';

import { CalDetailsPage } from './cal-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalDetailsPageRoutingModule
  ],
  declarations: [CalDetailsPage]
})
export class CalDetailsPageModule {}
