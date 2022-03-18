import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { FootingComponent } from './footing/footing.component';
import { HomeComponent } from './home/home.component';
import {LayoutComponent} from "./layout/layout.component";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FootingComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
