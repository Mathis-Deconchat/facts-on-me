import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactNavComponent } from './fact-nav.component';

describe('FactNavComponent', () => {
  let component: FactNavComponent;
  let fixture: ComponentFixture<FactNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
