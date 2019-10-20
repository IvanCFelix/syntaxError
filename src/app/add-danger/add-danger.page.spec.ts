import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDangerPage } from './add-danger.page';

describe('AddDangerPage', () => {
  let component: AddDangerPage;
  let fixture: ComponentFixture<AddDangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDangerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
