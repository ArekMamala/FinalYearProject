import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day1Page } from './day1.page';

const routes: Routes = [
  {
    path: '',
    component: Day1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day1PageRoutingModule {}
