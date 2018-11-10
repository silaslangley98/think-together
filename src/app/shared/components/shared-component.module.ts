import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material.module';

import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
	],
	declarations: [ ConversationListComponent, UserDetailsComponent ],
	exports: [ ConversationListComponent, UserDetailsComponent ],
})
export class SharedModule { }
