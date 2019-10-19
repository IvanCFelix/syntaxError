import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerPage } from './danger.page';

describe('DangerPage', () => {
  let component: DangerPage;
  let fixture: ComponentFixture<DangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
