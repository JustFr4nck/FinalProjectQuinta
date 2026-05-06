import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertiInBTC } from './converti-in-btc';

describe('ConvertiInBTC', () => {
  let component: ConvertiInBTC;
  let fixture: ComponentFixture<ConvertiInBTC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertiInBTC],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertiInBTC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
