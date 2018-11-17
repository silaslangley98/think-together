import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material.module';

import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { QuestionComponent } from './question/question.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import AddQuestionDialogComponent from './add-question-dialog/add-question-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
	],
	declarations: [ AddQuestionDialogComponent, ConversationListComponent, QuestionComponent, UserDetailsComponent ],
	exports: [ ConversationListComponent, QuestionComponent, UserDetailsComponent ],
	entryComponents: [ AddQuestionDialogComponent],
})
export class SharedModule { }
