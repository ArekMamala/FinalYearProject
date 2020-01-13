import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopersPage } from './developers.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopersPageRoutingModule {}
