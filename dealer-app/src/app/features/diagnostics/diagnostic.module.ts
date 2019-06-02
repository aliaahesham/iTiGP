import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';

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
