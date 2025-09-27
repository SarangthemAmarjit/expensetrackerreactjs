import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transactionsection } from './transactionsection';

describe('Transactionsection', () => {
  let component: Transactionsection;
  let fixture: ComponentFixture<Transactionsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transactionsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transactionsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
