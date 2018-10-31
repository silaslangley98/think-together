import { Component, Input, OnInit } from '@angular/core';

import { User } from '../classes/User';

@Component({
	selector    : 'app-user-details',
	templateUrl : './user-details.component.html',
	styleUrls   : ['./user-details.component.scss'],
})

export class UserDetailsComponent implements OnInit {
	@Input() user: User;

	constructor() { }

	ngOnInit() {}
}
