import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendBookPage } from './lend-book.page';

describe('LendBookPage', () => {
  let component: LendBookPage;
  let fixture: ComponentFixture<LendBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
