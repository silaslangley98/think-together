import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/services/users.service';

import { User } from '../shared/classes/User';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})

export class NavComponent implements OnInit {
	public currentUser: User;

	constructor(private users: UsersService) {}

	ngOnInit() {
		this.currentUser = this.users.getCurrentUser();
	}
}
