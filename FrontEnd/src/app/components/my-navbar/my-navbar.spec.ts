import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavbar } from './my-navbar';

describe('MyNavbar', () => {
  let component: MyNavbar;
  let fixture: ComponentFixture<MyNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(MyNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
