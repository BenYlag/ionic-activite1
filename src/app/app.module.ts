import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {TabsPage} from './tabs/tabs.page';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {SettingsPage} from './settings/settings.page';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
      AppComponent,
      TabsPage,
      SettingsPage
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
