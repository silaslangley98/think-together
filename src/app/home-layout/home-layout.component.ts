import { Component, OnInit } from '@angular/core';

import { AuthService } from '../authentication/auth.service';
import { UsersService } from '../shared/services/users.service';

import { User } from '../shared/classes/User';

@Component({
	selector: 'home-layout',
	templateUrl: './home-layout.component.html',
	styleUrls: ['./home-layout.component.scss'],
})

export class HomeLayoutComponent implements OnInit {
	public currentUser: User;

	constructor(public auth: AuthService, private users: UsersService) {}

	ngOnInit() {
		this.currentUser = this.users.getCurrentUser();
	}
}
