import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Location} from "@angular/common";

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterTestingModule
  ],
  providers: [Location,Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
