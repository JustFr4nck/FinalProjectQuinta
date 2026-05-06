import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaDesc } from './modifica-desc';

describe('ModificaDesc', () => {
  let component: ModificaDesc;
  let fixture: ComponentFixture<ModificaDesc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificaDesc],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaDesc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
