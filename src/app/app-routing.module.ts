import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountPageModule',
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  {
    path: 'schedule-filter',
    loadChildren:
      './pages/schedule-filter/schedule-filter.module#ScheduleFilterPageModule',
  },
  {
    path: 'schedule',
    loadChildren: './pages/schedule/schedule.module#SchedulePageModule',
  },
  {
    path: 'session',
    loadChildren: './pages/session/session.module#SessionPageModule',
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignupPageModule',
  },
  {
    path: 'speaker-detail',
    loadChildren:
      './pages/speaker-detail/speaker-detail.module#SpeakerDetailPageModule',
  },
  {
    path: 'speaker-list',
    loadChildren:
      './pages/speaker-list/speaker-list.module#SpeakerListPageModule',
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportPageModule',
  },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialPageModule',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
