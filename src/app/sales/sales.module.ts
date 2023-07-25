import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { FlyPipe } from './pipes/fly.pipe';
import { MyUpperPipe } from './pipes/myupper.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    SortComponent,
    FlyPipe,
    MyUpperPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    SortComponent,
  ],
})
export class SalesModule {}
