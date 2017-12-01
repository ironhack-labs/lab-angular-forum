import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsListComponent } from './threads-list.component';

describe('ThreadsListComponent', () => {
  let component: ThreadsListComponent;
  let fixture: ComponentFixture<ThreadsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
