import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NotCommonComponent } from './sales/pages/not-common/not-common.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { SortComponent } from './sales/pages/sort/sort.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
    pathMatch: 'full',
  },
  {
    path: 'not-common',
    component: NotCommonComponent,
    pathMatch: 'full',
  },
  {
    path: 'sort',
    component: SortComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
