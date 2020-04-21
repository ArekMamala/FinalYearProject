import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day4Page } from './day4.page';

const routes: Routes = [
  {
    path: '',
    component: Day4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day4PageRoutingModule {}
