import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertiInUSD } from './converti-in-usd';

describe('ConvertiInUSD', () => {
  let component: ConvertiInUSD;
  let fixture: ComponentFixture<ConvertiInUSD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertiInUSD],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertiInUSD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
