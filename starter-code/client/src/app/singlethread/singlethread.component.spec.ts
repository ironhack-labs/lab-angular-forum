import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglethreadComponent } from './singlethread.component';

describe('SinglethreadComponent', () => {
  let component: SinglethreadComponent;
  let fixture: ComponentFixture<SinglethreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglethreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglethreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
