import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mealday4Page } from './mealday4.page';

const routes: Routes = [
  {
    path: '',
    component: Mealday4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mealday4PageRoutingModule {}
