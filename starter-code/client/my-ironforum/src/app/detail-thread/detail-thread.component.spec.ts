/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailThreadComponent } from './detail-thread.component';

describe('DetailThreadComponent', () => {
  let component: DetailThreadComponent;
  let fixture: ComponentFixture<DetailThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
