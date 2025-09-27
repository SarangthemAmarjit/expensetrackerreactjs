import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Budgetsection } from './budgetsection';

describe('Budgetsection', () => {
  let component: Budgetsection;
  let fixture: ComponentFixture<Budgetsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Budgetsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Budgetsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
