import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileSettingsComponent }   from './profile-settings.component';

const profileRoutes: Routes = [
	{ path: '', component: ProfileSettingsComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(profileRoutes)
	],

	exports: [
		RouterModule,
	],
})

export class ProfileSettingsRoutingModule { }
