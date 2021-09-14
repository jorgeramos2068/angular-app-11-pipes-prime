import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SalesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
