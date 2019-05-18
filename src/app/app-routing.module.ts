import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login-layout/login/login.component';
import { SignupComponent } from './login-layout/signup/signup.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{
		path: 'login',
		component: LoginLayoutComponent,
		children: [
			{ path: '', component: LoginComponent },
			{ path: 'register', component: SignupComponent },
		],
	},
	{
		path: 'home',
		loadChildren: './home-layout/home-layout.module#HomeLayoutModule',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule { }
