import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeLayoutModule } from './home-layout/home-layout.module';
import { LoginLayoutModule } from './login-layout/login-layout.module';
import { QuestionAnswerModule } from './question-answer/question-answer.module';
import { SharedModule } from './shared/components/shared-component.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AuthenticationModule,
		HomeLayoutModule,
		LoginLayoutModule,
		QuestionAnswerModule,
		SharedModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		LayoutModule,
		MaterialModule,
	],
	providers: [AngularFireAuth],
	bootstrap: [AppComponent],
})

export class AppModule { }
