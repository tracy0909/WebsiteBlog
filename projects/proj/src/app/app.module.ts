import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './Component/index-page/index-page.component';
import { HeaderComponent } from './Component/index-page/header/header.component';
import { MainComponent } from './Component/index-page/main/main.component';
import { FooterComponent } from './Component/index-page/footer/footer.component';
import { AboutMePageComponent } from './Component/about-me-page/about-me-page.component';
import { AboutMeMainComponent } from './Component/about-me-page/about-me-main/about-me-main.component';
import { CardArticleComponent } from './Component/index-page/main/card-article/card-article.component';
import { SubjectFrontendComponent } from './Component/index-page/main/card-article/subject-frontend/subject-frontend.component';
import { SubjectBackendComponent } from './Component/index-page/main/card-article/subject-backend/subject-backend.component';
import { ArchivePageComponent } from './Component/archive-page/archive-page.component';
import { ArchiveMainComponent } from './Component/archive-page/archive-main/archive-main.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutMePageComponent,
    AboutMeMainComponent,
    CardArticleComponent,
    SubjectFrontendComponent,
    SubjectBackendComponent,
    ArchivePageComponent,
    ArchiveMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
