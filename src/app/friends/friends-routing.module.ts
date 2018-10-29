import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendListComponent }   from './friend-list/friend-list.component';

const friendListRoutes: Routes = [
	{ path: 'friends',  component: FriendListComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(friendListRoutes),
	],

	exports: [
		RouterModule,
	],
})

export class FriendsRoutingModule { };
