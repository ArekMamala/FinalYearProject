import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mealday2Page } from './mealday2.page';

const routes: Routes = [
  {
    path: '',
    component: Mealday2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mealday2PageRoutingModule {}
