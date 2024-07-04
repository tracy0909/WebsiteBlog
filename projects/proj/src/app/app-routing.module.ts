import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './Component/about-me-page/about-me-page.component';
import { IndexPageComponent } from './Component/index-page/index-page.component';
import { ArchivePageComponent } from './Component/archive-page/archive-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexPageComponent },
  { path: 'aboutMe', component: AboutMePageComponent},
  { path: 'archive', component: ArchivePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
