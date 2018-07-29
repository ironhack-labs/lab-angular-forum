import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewthreadComponent } from './newthread.component';

describe('NewthreadComponent', () => {
  let component: NewthreadComponent;
  let fixture: ComponentFixture<NewthreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewthreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
