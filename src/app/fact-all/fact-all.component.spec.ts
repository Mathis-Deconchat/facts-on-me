import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactAllComponent } from './fact-all.component';

describe('FactAllComponent', () => {
  let component: FactAllComponent;
  let fixture: ComponentFixture<FactAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
