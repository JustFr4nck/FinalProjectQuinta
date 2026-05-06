import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovDetails } from './mov-details';

describe('MovDetails', () => {
  let component: MovDetails;
  let fixture: ComponentFixture<MovDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(MovDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
