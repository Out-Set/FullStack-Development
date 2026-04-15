import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTextBoxValueAndPrintComponent } from './get-text-box-value-and-print.component';

describe('GetTextBoxValueAndPrintComponent', () => {
  let component: GetTextBoxValueAndPrintComponent;
  let fixture: ComponentFixture<GetTextBoxValueAndPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTextBoxValueAndPrintComponent]
    });
    fixture = TestBed.createComponent(GetTextBoxValueAndPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
