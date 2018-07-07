import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Schedule',
      url: '/schedule',
      icon: 'calendar',
    },
    {
      title: 'Speakers',
      url: '/speakers',
      icon: 'contacts',
    },
    {
      title: 'Map',
      url: '/map',
      icon: 'map',
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {}

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    const readySource = await this.platform.ready();
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }

  public logout() {}

  public login() {}
}
