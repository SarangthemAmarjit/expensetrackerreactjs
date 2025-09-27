import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorysection } from './categorysection';

describe('Categorysection', () => {
  let component: Categorysection;
  let fixture: ComponentFixture<Categorysection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorysection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorysection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
