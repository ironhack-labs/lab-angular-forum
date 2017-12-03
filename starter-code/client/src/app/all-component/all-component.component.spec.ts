import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComponentComponent } from './all-component.component';

describe('AllComponentComponent', () => {
  let component: AllComponentComponent;
  let fixture: ComponentFixture<AllComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
