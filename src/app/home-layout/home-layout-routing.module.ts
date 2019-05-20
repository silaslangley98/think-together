import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './home-layout.component';

const routes: Routes = [
	{
		path: '',
		component: HomeLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'questions',
				pathMatch: 'full',
			},
			{
				path: 'questions',
				loadChildren: '../question-answer/question-answer.module#QuestionAnswerModule',
			},
			{
				path: 'questions/question/:id',
				loadChildren: '../question-answer/question-answer.module#QuestionAnswerModule',
			},
			{
				path: 'profile',
				loadChildren: '../profile-settings/profile-settings.module#ProfileSettingsModule',
			},
		],
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeLayoutRoutingModule {}
