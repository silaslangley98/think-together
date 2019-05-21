import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from  "@angular/router";

import { ApiService } from '../../shared/services/api.service';

import { User } from '../classes/User';

@Injectable({
	providedIn : 'root'
})

export class UsersService {
	path : string = '/users';
	currentUser : User;

	constructor(private api: ApiService, private router: Router,) { }

	public add() {
		this.api.add(this.path, this.currentUser);
	}

	public getCurrentUser() {
		return this.currentUser || JSON.parse(localStorage.getItem('currentUser')) || null;
	}

	public setCurrentUser(user) {
		this.currentUser = {
			id     : user.uid,
			name   : user.displayName,
			avatar : 'university-triangle2.jpg',
			email  : user.email,
		};

		sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));

		this.router.navigate(['home']);
	}

	public removeCurrentUser() {
		this.currentUser = null;
		sessionStorage.removeItem('currentUser');
	}

	public getUsers(): Observable<any> {
		return this.api.getAll(this.path, null);
	}
}
