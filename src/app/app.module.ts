import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AvatarModule } from 'ng2-avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { LoginLayoutModule } from './login-layout/login-layout.module';
import { MaterialModule } from './material.module';
import { QuestionAnswerModule } from './question-answer/question-answer.module';
import { SharedModule } from './shared/components/shared-component.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AvatarModule.forRoot(),
		BrowserAnimationsModule,

		AppRoutingModule,
		LayoutModule,
		LoginLayoutModule,
		MaterialModule,
		QuestionAnswerModule,
		SharedModule,
	],
	providers: [AngularFireAuth],
	bootstrap: [AppComponent],
})

export class AppModule { }
