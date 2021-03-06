import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsDetailsComponent } from './facts-details.component';

describe('FactsDetailsComponent', () => {
  let component: FactsDetailsComponent;
  let fixture: ComponentFixture<FactsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
