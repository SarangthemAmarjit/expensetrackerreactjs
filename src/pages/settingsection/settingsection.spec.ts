import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Settingsection } from './settingsection';

describe('Settingsection', () => {
  let component: Settingsection;
  let fixture: ComponentFixture<Settingsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Settingsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Settingsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
