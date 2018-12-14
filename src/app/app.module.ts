import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { QuestionAnswerModule } from './question-answer/question-answer.module';
import { SharedModule } from './shared/components/shared-component.module';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		AuthenticationModule,
		QuestionAnswerModule,
		SharedModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		LayoutModule,
		MaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})

export class AppModule { }
