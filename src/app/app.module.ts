import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { LayoutModule } from '@angular/cdk/layout';

import { FriendsModule } from './friends/friends.module';
import { MaterialModule } from './material.module';
import { QuestionAnswerModule } from './question-answer/question-answer.module';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './shared/user-details/user-details.component';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HeaderComponent,
		UserDetailsComponent,
	],
	imports: [
		BrowserModule,
		FriendsModule,
		QuestionAnswerModule,
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
