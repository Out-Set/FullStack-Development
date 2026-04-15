import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseBootstrapComponent } from './use-bootstrap.component';

describe('UseBootstrapComponent', () => {
  let component: UseBootstrapComponent;
  let fixture: ComponentFixture<UseBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseBootstrapComponent]
    });
    fixture = TestBed.createComponent(UseBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
