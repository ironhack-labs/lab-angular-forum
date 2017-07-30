import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadDetailComponent } from './thread-detail.component';

describe('ThreadDetailComponent', () => {
  let component: ThreadDetailComponent;
  let fixture: ComponentFixture<ThreadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
