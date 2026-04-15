import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavbarComponent } from './project-navbar.component';

describe('ProjectNavbarComponent', () => {
  let component: ProjectNavbarComponent;
  let fixture: ComponentFixture<ProjectNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectNavbarComponent]
    });
    fixture = TestBed.createComponent(ProjectNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
