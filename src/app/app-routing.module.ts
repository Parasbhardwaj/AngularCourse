import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModulesExerciseComponent } from './components-modules-exercise/components-modules-exercise.component';
import { TemplatesExercise1Component } from './templates-exercise1/templates-exercise1.component';
import { TemplatesExercise2Component } from './templates-exercise2/templates-exercise2.component';

const routes: Routes = [
  { path: 'components-modules-exercise', component: ComponentsModulesExerciseComponent},
  { path: 'templates-exercise1', component: TemplatesExercise1Component},
  { path: 'templates-exercise2', component: TemplatesExercise2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
