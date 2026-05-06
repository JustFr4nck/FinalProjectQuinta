import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaMov } from './elimina-mov';

describe('EliminaMov', () => {
  let component: EliminaMov;
  let fixture: ComponentFixture<EliminaMov>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminaMov],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminaMov);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
