import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mealday7Page } from './mealday7.page';

const routes: Routes = [
  {
    path: '',
    component: Mealday7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mealday7PageRoutingModule {}
