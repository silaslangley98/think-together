import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './authentication-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		ReactiveFormsModule,
		routing,
	],
	declarations: [LoginComponent, SignupComponent],
})

export class AuthenticationModule { }
