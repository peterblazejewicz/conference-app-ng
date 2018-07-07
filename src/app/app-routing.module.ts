import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'schedule-filter', loadChildren: './schedule-filter/schedule-filter.module#ScheduleFilterPageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'session', loadChildren: './session/session.module#SessionPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'speaker-detail', loadChildren: './speaker-detail/speaker-detail.module#SpeakerDetailPageModule' },
  { path: 'speaker-list', loadChildren: './speaker-list/speaker-list.module#SpeakerListPageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
