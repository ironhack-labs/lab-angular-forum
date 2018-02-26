import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThreadComponentComponent } from './new-thread-component.component';

describe('NewThreadComponentComponent', () => {
  let component: NewThreadComponentComponent;
  let fixture: ComponentFixture<NewThreadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewThreadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewThreadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
