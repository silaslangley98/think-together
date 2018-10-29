import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionAnswerRoutingModule } from './question-answer-routing.module';

import { QuestionsComponent } from './questions/questions.component';

@NgModule({
	imports: [
		CommonModule,
		QuestionAnswerRoutingModule,
	],
	declarations: [QuestionsComponent]
})

export class QuestionAnswerModule { }
