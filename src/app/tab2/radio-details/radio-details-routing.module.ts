import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioDetailsPage } from './radio-details.page';

const routes: Routes = [
  {
    path: '',
    component: RadioDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioDetailsPageRoutingModule {}
