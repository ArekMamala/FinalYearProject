import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationPagePageRoutingModule } from './application-page-routing.module';

import { ApplicationPagePage } from './application-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationPagePageRoutingModule
  ],
  declarations: [ApplicationPagePage]
})
export class ApplicationPagePageModule {}
