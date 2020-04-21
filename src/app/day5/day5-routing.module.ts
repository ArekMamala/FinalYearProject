import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day5Page } from './day5.page';

const routes: Routes = [
  {
    path: '',
    component: Day5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day5PageRoutingModule {}
