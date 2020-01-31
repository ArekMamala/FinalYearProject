import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}