import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { AppMenu } from './components/menu/app.menu';
import { AppHomeBanner } from './components/home-banner/app.home-banner';
import { AppServicesArea } from "./components/services-area/app.services-area";
import { AppFooter } from "./components/footer/app.footer";

@NgModule({
  declarations: [
    AppComponent,
    AppMenu,
    AppHomeBanner,
    AppServicesArea,
    AppFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
