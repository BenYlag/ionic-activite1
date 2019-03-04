import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TabsPage} from './tabs/tabs.page';
import {AuthGuard} from './services/auth-guard.service';
import {SettingsPage} from './settings/settings.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './book-list/book-list.module#BookListPageModule'
      },
      {
        path: 'bookList',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: './book-list/book-list.module#BookListPageModule'
          }
        ]
      },
      {
        path: 'cdList',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: './cd-list/cd-list.module#CdListPageModule'
          }
        ]
      }
    ]
  },
    {
        path: '',
        redirectTo: 'tabs/bookList',
        pathMatch: 'full'
    },
    { path: 'settings', canActivate: [AuthGuard], component: SettingsPage },
  { path: 'auth/:mode', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'auth',
    redirectTo: 'auth/connect',
    pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
