import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent1 } from './child-component1';

describe('ChildComponent1', () => {
  let component: ChildComponent1;
  let fixture: ComponentFixture<ChildComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent1],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
