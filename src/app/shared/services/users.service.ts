import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';

import { User } from '../classes/User';

@Injectable({
	providedIn: 'root'
})

export class UsersService {
	path: string = '/users';

	currentUser: User = {
		id     : '1',
		name   : 'Silas Langley',
		avatar : 'university-triangle2.jpg',
		email  : 'silaslangley@somewhere.com',
	};

	constructor(private api: ApiService) { }

	getCurrentUser() {
		return this.currentUser;
	}

	getUsers(): Observable<any> {
		return this.api.getAll(this.path, null);
	}
}
