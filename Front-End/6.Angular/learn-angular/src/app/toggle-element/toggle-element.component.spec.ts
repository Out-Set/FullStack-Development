import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleElementComponent } from './toggle-element.component';

describe('ToggleElementComponent', () => {
  let component: ToggleElementComponent;
  let fixture: ComponentFixture<ToggleElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleElementComponent]
    });
    fixture = TestBed.createComponent(ToggleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
