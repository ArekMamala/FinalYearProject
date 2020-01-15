import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

import { IonicModule } from '@ionic/angular';

import { DeveloperPageRoutingModule } from './developer-routing.module';

=======
import { IonicModule } from '@ionic/angular';
import { DeveloperPageRoutingModule } from './developer-routing.module';
>>>>>>> 159b1049e7082aec3cb4a71d30b76759d4c34cfa
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
