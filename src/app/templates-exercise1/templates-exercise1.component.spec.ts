import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesExercise1Component } from './templates-exercise1.component';

describe('TemplatesExercise1Component', () => {
  let component: TemplatesExercise1Component;
  let fixture: ComponentFixture<TemplatesExercise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesExercise1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesExercise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
