import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesExercise2Component } from './templates-exercise2.component';

describe('TemplatesExercise2Component', () => {
  let component: TemplatesExercise2Component;
  let fixture: ComponentFixture<TemplatesExercise2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesExercise2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesExercise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
