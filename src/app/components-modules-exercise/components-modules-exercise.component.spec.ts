import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsModulesExerciseComponent } from './components-modules-exercise.component';

describe('ComponentsModulesExerciseComponent', () => {
  let component: ComponentsModulesExerciseComponent;
  let fixture: ComponentFixture<ComponentsModulesExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModulesExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsModulesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
