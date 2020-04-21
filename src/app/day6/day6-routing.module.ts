import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day6Page } from './day6.page';

const routes: Routes = [
  {
    path: '',
    component: Day6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day6PageRoutingModule {}
