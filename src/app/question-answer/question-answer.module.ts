import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/components/shared-component.module';

import { QuestionAnswerRoutingModule } from './question-answer-routing.module';

import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		SharedModule,
		QuestionAnswerRoutingModule,
	],

	declarations: [
		QuestionsComponent,
		QuestionDetailComponent,
	],
})

export class QuestionAnswerModule { }
