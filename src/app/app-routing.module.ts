import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/questions', pathMatch: 'full' },
	{ path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule' },
	{ path: 'friends', loadChildren: './friends/friends.module#FriendsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
