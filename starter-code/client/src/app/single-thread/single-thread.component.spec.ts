import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleThreadComponent } from './single-thread.component';

describe('SingleThreadComponent', () => {
  let component: SingleThreadComponent;
  let fixture: ComponentFixture<SingleThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
