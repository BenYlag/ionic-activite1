import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookListPage } from './book-list.page';
import {LendBookComponent} from './lend-book/lend-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BookListPage,
      LendBookComponent
   ],
    entryComponents: [LendBookComponent],
})
export class BookListPageModule {}
