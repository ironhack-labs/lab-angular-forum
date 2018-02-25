import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThreatComponent } from './list-threat.component';

describe('ListThreatComponent', () => {
  let component: ListThreatComponent;
  let fixture: ComponentFixture<ListThreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
