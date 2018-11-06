import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/components/shared-component.module';

import { QuestionAnswerRoutingModule } from './question-answer-routing.module';

import { QuestionsComponent } from './questions/questions.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		QuestionAnswerRoutingModule,
	],

	declarations: [
		QuestionsComponent,
	],
})

export class QuestionAnswerModule { }
