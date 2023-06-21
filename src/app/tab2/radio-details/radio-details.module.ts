import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioDetailsPageRoutingModule } from './radio-details-routing.module';

import { RadioDetailsPage } from './radio-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioDetailsPageRoutingModule
  ],
  declarations: [RadioDetailsPage]
})
export class RadioDetailsPageModule {}
