import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { BodyComponent } from './body-component/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/share-data.service';
import { mainService } from './services/main-service';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BodyComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [DataService, mainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
