import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CdListPage } from './cd-list.page';
import {LendCdComponent} from './lend-cd/lend-cd.component';

const routes: Routes = [
  {
    path: '',
    component: CdListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CdListPage,
    LendCdComponent
  ],
  entryComponents: [LendCdComponent],
})
export class CdListPageModule {}
