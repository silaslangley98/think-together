import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login-layout/login/login.component';
import { QuestionsComponent }   from './question-answer/questions/questions.component';
import { SignupComponent } from './login-layout/signup/signup.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{
		path: 'login',
		component: LoginLayoutComponent,
		children: [
			{ path: '', component: LoginComponent },
			{ path: 'signup', component: SignupComponent },
		],
	},
	{
		path: 'home', component: HomeLayoutComponent,
		children: [
			{ path: '', component: QuestionsComponent },
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule { }
