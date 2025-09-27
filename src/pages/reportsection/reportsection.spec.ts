import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportsection } from './reportsection';

describe('Reportsection', () => {
  let component: Reportsection;
  let fixture: ComponentFixture<Reportsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reportsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
