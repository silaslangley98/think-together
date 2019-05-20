import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
	declarations: [
		LoginHeaderComponent,
		LoginLayoutComponent,
		LoginComponent,
		SignupComponent,
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		ReactiveFormsModule,
		RouterModule,
	]
})

export class LoginLayoutModule { }
