import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxDataGridModule } from "devextreme-angular";
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		DxDataGridModule
	],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
