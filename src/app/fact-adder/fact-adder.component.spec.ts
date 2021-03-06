import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactAdderComponent } from './fact-adder.component';

describe('FactAdderComponent', () => {
  let component: FactAdderComponent;
  let fixture: ComponentFixture<FactAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
