import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day7Page } from './day7.page';

const routes: Routes = [
  {
    path: '',
    component: Day7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day7PageRoutingModule {}
