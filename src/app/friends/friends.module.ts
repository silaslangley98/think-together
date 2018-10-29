import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';

import { FriendListComponent } from './friend-list/friend-list.component';

@NgModule({
  imports: [
    CommonModule,
	FriendsRoutingModule,
  ],
  declarations: [FriendListComponent]
})

export class FriendsModule { }
