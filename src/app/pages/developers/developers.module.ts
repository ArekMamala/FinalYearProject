import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopersPageRoutingModule } from './developers-routing.module';

import { DevelopersPage } from './developers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopersPageRoutingModule
  ],
  declarations: [DevelopersPage]
})
export class DevelopersPageModule {}
