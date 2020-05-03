import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mealday5Page } from './mealday5.page';

const routes: Routes = [
  {
    path: '',
    component: Mealday5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mealday5PageRoutingModule {}
