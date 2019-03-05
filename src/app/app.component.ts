import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'cog'
    },
    {
      title: 'Nouvel Utilistateur',
      url: '/auth/new',
      icon: 'person-add'
    },
    {
      title: 'Connexion',
      url: '/auth/connect',
      icon: 'person'
    }
  ];

  isAuth: boolean;

  constructor (
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router ) {
    this.initializeApp();

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // Initialize Firebase
      const config = {
        apiKey: 'AIzaSyAgbDo_Z8cWt7xj2SOOYVkOWc6LPQmhqnY',
        authDomain: 'ionic-oc-cours.firebaseapp.com',
        databaseURL: 'https://ionic-oc-cours.firebaseio.com',
        projectId: 'ionic-oc-cours',
        storageBucket: 'ionic-oc-cours.appspot.com',
        messagingSenderId: '922997445227'
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              this.isAuth = true;
              this.router.navigateByUrl('/tabs');
            } else {
              this.isAuth = false;
              this.router.navigateByUrl('/auth/connect');
            }
          }
      );
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onDisconnect() {
    firebase.auth().signOut();
  }
}
