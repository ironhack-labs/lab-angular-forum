/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewReplyComponent } from './newReply.component';

describe('NewReplyComponent', () => {
  let component: NewReplyComponent;
  let fixture: ComponentFixture<NewReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
