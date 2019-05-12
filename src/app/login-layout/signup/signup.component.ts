import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

@Component({
	selector    : 'app-signup',
	templateUrl : './signup.component.html',
	styleUrls   : ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

	constructor(private auth: AuthService) { }

	signupForm = new FormGroup({
		name            : new FormControl(''),
		email           : new FormControl(''),
		password        : new FormControl(''),
		confirmPassword : new FormControl(''),
	});

	ngOnInit() {
	}

	signup() {
		const { confirmPassword, name, ...signupCredentials } = this.signupForm.value;

		this.auth.signup(signupCredentials, name);
	}
}
