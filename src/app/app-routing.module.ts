import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TabsPage} from './tabs/tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bookList',
        children: [
          {
            path: '',
            loadChildren: './book-list/book-list.module#BookListPageModule'
          }
        ]
      },
      {
        path: 'cdList',
        children: [
          {
            path: '',
            loadChildren: './cd-list/cd-list.module#CdListPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/bookList',
        pathMatch: 'full'
      }
    ]
  },
    {
        path: '',
        redirectTo: 'tabs/bookList',
        pathMatch: 'full'
    },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
