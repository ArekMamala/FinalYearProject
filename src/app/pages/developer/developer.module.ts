import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeveloperPageRoutingModule } from './developer-routing.module';

import { DeveloperPage } from './developer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeveloperPageRoutingModule
  ],
  declarations: [DeveloperPage]
})
export class DeveloperPageModule {}
