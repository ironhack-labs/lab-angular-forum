import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThreadsComponent } from './my-threads.component';

describe('MyThreadsComponent', () => {
  let component: MyThreadsComponent;
  let fixture: ComponentFixture<MyThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
