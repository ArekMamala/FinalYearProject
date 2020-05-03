import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mealday6Page } from './mealday6.page';

const routes: Routes = [
  {
    path: '',
    component: Mealday6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mealday6PageRoutingModule {}
