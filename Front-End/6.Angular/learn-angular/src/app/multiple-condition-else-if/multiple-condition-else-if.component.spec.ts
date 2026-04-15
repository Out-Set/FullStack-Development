import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleConditionElseIfComponent } from './multiple-condition-else-if.component';

describe('MultipleConditionElseIfComponent', () => {
  let component: MultipleConditionElseIfComponent;
  let fixture: ComponentFixture<MultipleConditionElseIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleConditionElseIfComponent]
    });
    fixture = TestBed.createComponent(MultipleConditionElseIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
