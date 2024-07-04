import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './Component/index-page/index-page.component';
import { HeaderComponent } from './Component/index-page/header/header.component';
import { MainComponent } from './Component/index-page/main/main.component';
import { FooterComponent } from './Component/index-page/footer/footer.component';
import { AboutMePageComponent } from './Component/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutMePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
