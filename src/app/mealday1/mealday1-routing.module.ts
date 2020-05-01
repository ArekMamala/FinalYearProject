import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mealday1Page } from './mealday1.page';

const routes: Routes = [
  {
    path: '',
    component: Mealday1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mealday1PageRoutingModule {}
