import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSelectModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

const MaterialModules = [MatButtonModule, MatSelectModule, MatFormFieldModule];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ... MaterialModules,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
