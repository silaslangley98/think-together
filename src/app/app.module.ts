import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { FriendsModule } from './friends/friends.module';
import { QuestionAnswerModule } from './question-answer/question-answer.module';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { UserListItemComponent } from './shared/user-list-item/user-list-item.component';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HeaderComponent,
		UserListItemComponent,
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
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})

export class AppModule { }
