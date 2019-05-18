import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent }   from './questions/questions.component';
import { QuestionDetailComponent }  from './question-detail/question-detail.component';

const questionsRoutes: Routes = [
	{ path: '', component: QuestionsComponent },
	{ path: 'question/:id', component: QuestionDetailComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(questionsRoutes)
	],

	exports: [
		RouterModule,
	],
})

export class QuestionAnswerRoutingModule { }
