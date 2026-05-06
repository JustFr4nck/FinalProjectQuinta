import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMov } from './lista-mov';

describe('ListaMov', () => {
  let component: ListaMov;
  let fixture: ComponentFixture<ListaMov>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMov],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMov);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
