import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultsComponent } from './results/results.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QuestionnaireComponent, ResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'questionnaire', component: QuestionnaireComponent },
      { path: 'results', component: ResultsComponent },

    ])
  ]
})
export class DiagnosticModule { }