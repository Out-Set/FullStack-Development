import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedLoopComponent } from './nested-loop.component';

describe('NestedLoopComponent', () => {
  let component: NestedLoopComponent;
  let fixture: ComponentFixture<NestedLoopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedLoopComponent]
    });
    fixture = TestBed.createComponent(NestedLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
