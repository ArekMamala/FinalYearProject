import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationPagePage } from './application-page.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationPagePageRoutingModule {}
