import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeRouter } from './home.router';



@NgModule({
  imports: [HomeRouter],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
