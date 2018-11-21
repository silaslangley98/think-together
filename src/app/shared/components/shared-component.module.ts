import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { QuestionComponent } from './question/question.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import AddQuestionDialogComponent from './add-question-dialog/add-question-dialog.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		ReactiveFormsModule,
	],
	declarations: [ AddQuestionDialogComponent, ConversationListComponent, QuestionComponent, UserDetailsComponent, ChipsAutocompleteComponent ],
	exports: [ ConversationListComponent, QuestionComponent, UserDetailsComponent ],
	entryComponents: [ AddQuestionDialogComponent],
})
export class SharedModule { }
