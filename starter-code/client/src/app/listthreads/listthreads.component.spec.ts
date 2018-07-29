import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListthreadsComponent } from './listthreads.component';

describe('ListthreadsComponent', () => {
  let component: ListthreadsComponent;
  let fixture: ComponentFixture<ListthreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListthreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListthreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
