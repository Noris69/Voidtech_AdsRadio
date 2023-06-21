import { Ajout3Component } from './details/ajout3/ajout3.component';
import { Ajout2Component } from './details/ajout2/ajout2.component';
import { Ajout1Component } from './details/ajout1/ajout1.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageComponent } from './notifications/page.component';
import { Page1Component } from './payment/page1.component';
import { Page2Component } from './aboutus/page2.component';
import { Page3Component } from './AdMars/page3.component';
import { Pack1Component } from './details/pack1/pack1.component';
import { Pack2Component } from './details/pack2/pack2.component';
import { Pack3Component } from './details/pack3/pack3.component';
const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./authentication/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'radio-details',
    loadChildren: () => import('./tab2/radio-details/radio-details.module').then( m => m.RadioDetailsPageModule)
  },
  {
    path: 'page/page',
    component: PageComponent
  },
  {
    path: 'page/page1',
    component: Page1Component
  },
  {
    path: 'page/page2',
    component: Page2Component
  },
  {
    path: 'page/page3',
    component: Page3Component
  },
  {
    path: 'details/pack1',
    component: Pack1Component
  },
  {
    path: 'details/pack2',
    component: Pack2Component
  },
  {
    path: 'details/pack3',
    component: Pack3Component
  },
  {
    path: 'details/ajout1',
    component: Ajout1Component
  },
  {
    path: 'details/ajout2',
    component: Ajout2Component
  },
  {
    path: 'details/ajout3',
    component: Ajout3Component
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'pack',
    loadChildren: () => import('./home/pack/pack.module').then( m => m.PackPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}