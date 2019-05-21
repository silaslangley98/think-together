import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFileUploadModule } from 'angular-material-fileupload';

import { MaterialModule } from '../material.module';
import { ProfileSettingsRoutingModule } from './profile-settings-routing.module';

import { ProfileSettingsComponent } from './profile-settings.component';

@NgModule({
	declarations: [ProfileSettingsComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		MaterialModule,
		MatFileUploadModule,
		ProfileSettingsRoutingModule,
		ReactiveFormsModule,
	],
})

export class ProfileSettingsModule { }
