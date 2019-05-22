import { NgModule } from '@angular/core';
import { AvatarModule } from 'ng2-avatar';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { ProfileSettingsRoutingModule } from './profile-settings-routing.module';

import { ProfileSettingsComponent } from './profile-settings.component';

@NgModule({
	declarations: [ProfileSettingsComponent],
	imports: [
		AvatarModule,
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		MaterialModule,
		ProfileSettingsRoutingModule,
		ReactiveFormsModule,
	],
})

export class ProfileSettingsModule { }
