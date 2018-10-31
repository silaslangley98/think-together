import { Component } from '@angular/core';

import { User } from '../shared/classes/User';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})

export class NavComponent {
	currentUser: User = {
		id     : '1',
		name   : 'Silas Langley',
		avatar : 'university-triangle2.jpg',
		email  : 'silaslangley@somewhere.com',
	};

	constructor() {}
}
