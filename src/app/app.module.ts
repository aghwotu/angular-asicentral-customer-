import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerCardComponent } from './views/partials/customer-card/customer-card.component';

@NgModule({
  declarations: [AppComponent, CustomerCardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CustomerCardComponent],
})
export class AppModule {}
