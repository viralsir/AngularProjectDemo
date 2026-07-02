import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDirective } from './control-directive';

describe('ControlDirective', () => {
  let component: ControlDirective;
  let fixture: ComponentFixture<ControlDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
