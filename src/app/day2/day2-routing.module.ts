import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day2Page } from './day2.page';

const routes: Routes = [
  {
    path: '',
    component: Day2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day2PageRoutingModule {}
