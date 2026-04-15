import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseComponent } from './switch-case.component';

describe('SwitchCaseComponent', () => {
  let component: SwitchCaseComponent;
  let fixture: ComponentFixture<SwitchCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCaseComponent]
    });
    fixture = TestBed.createComponent(SwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
