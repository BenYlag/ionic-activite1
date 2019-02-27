import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendCdPage } from './lend-cd.page';

describe('LendCdPage', () => {
  let component: LendCdPage;
  let fixture: ComponentFixture<LendCdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendCdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendCdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
