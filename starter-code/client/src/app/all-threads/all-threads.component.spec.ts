import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllThreadsComponent } from './all-threads.component';

describe('AllThreadsComponent', () => {
  let component: AllThreadsComponent;
  let fixture: ComponentFixture<AllThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
