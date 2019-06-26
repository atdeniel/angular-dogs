import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogMainComponent } from './components/dog-main/dog-main.component';
import { DogItemComponent } from './components/dog-item/dog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DogMainComponent,
    DogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
