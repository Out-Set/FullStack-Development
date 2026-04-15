import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRuleOfStyleComponent } from './basic-rule-of-style.component';

describe('BasicRuleOfStyleComponent', () => {
  let component: BasicRuleOfStyleComponent;
  let fixture: ComponentFixture<BasicRuleOfStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicRuleOfStyleComponent]
    });
    fixture = TestBed.createComponent(BasicRuleOfStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
