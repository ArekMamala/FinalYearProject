import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mealday3Page } from './mealday3.page';

const routes: Routes = [
  {
    path: '',
    component: Mealday3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mealday3PageRoutingModule {}
