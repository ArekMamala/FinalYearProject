import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day3Page } from './day3.page';

const routes: Routes = [
  {
    path: '',
    component: Day3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day3PageRoutingModule {}
