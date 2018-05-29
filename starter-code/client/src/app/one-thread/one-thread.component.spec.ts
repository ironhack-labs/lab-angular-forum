/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneThreadComponent } from './one-thread.component';

describe('OneThreadComponent', () => {
  let component: OneThreadComponent;
  let fixture: ComponentFixture<OneThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
