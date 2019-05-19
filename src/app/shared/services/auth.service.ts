import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { first } from 'rxjs/operators';
import { Router } from  "@angular/router";

import { UsersService } from './users.service';

import { User } from '../classes/User';
import { LoginCredentials } from '../classes/LoginCredentials';

@Injectable({
  providedIn : 'root',
})

export class AuthService {
	path : string = '/users';
	name : string;
	user : User;

	constructor(
		private firebaseAuth : AngularFireAuth,
		private router       : Router,
		private users        : UsersService
	) {
		this.firebaseAuth.authState.subscribe(loggedInUser => {
			if (loggedInUser) {
				const user = this.firebaseAuth.auth.currentUser;

				user.updateProfile({ displayName : this.name, photoURL: '' })
					.then(() => {
						this.users.setCurrentUser(user);
					});
			}
		})
	}

	async login(loginCredentials: LoginCredentials) {
		try {
			await this.firebaseAuth.auth
				.signInWithEmailAndPassword(loginCredentials.email, loginCredentials.password);

		} catch (error) {
			console.log("Error!"  +  error.message);

			return error.message;
		}
	}

	async signup(loginCredentials : LoginCredentials, name : string) {
		this.name = name;

		try {
			await this.firebaseAuth.auth
				.createUserWithEmailAndPassword(loginCredentials.email, loginCredentials.password)

			await this.login(loginCredentials);

			this.users.add();

		} catch(error) {
			console.log('Error! ' + error.message);

			return error.message;
 		}
	}

	isLoggedIn() {
		return this.firebaseAuth.authState.pipe(first()).toPromise();
	}

	async logout() {
		await this.firebaseAuth.auth.signOut();

		this.users.removeCurrentUser();

		this.router.navigate(['login']);
	}
}
