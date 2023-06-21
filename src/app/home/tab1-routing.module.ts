import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Pack1Component } from './../details/pack1/pack1.component';


const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'pack',
    loadChildren: () => import('./pack/pack.module').then( m => m.PackPageModule)
  },
  {
    path: 'details/pack1',
    component: Pack1Component
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
