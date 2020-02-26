import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalDetailsPage } from './cal-details.page';

const routes: Routes = [
  {
    path: '',
    component: CalDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalDetailsPageRoutingModule {}
