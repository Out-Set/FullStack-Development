import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndCallFunctionComponent } from './create-and-call-function.component';

describe('CreateAndCallFunctionComponent', () => {
  let component: CreateAndCallFunctionComponent;
  let fixture: ComponentFixture<CreateAndCallFunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAndCallFunctionComponent]
    });
    fixture = TestBed.createComponent(CreateAndCallFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
