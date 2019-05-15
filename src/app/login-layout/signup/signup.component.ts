import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { LoginService } from '../login.service';

@Component({
	selector    : 'app-signup',
	templateUrl : './signup.component.html',
	styleUrls   : ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

	constructor(private auth: AuthService, private loginService: LoginService) { }

	signupForm = new FormGroup({
		name            : new FormControl(''),
		email           : new FormControl('', this.loginService.getEmailValidators()),
		password        : new FormControl('', this.loginService.getPasswordValidators()),
		confirmPassword : new FormControl(''),
	});

	ngOnInit() {
	}

	signup() {
		const { confirmPassword, name, ...signupCredentials } = this.signupForm.value;

		this.auth.signup(signupCredentials, name);
	}

	public hasError(controlName: string, errorName: string) {
		return this.signupForm.controls[controlName].hasError(errorName);
	}

	public getValidators(inputType:string) {
		return this.loginService.getValidators(inputType);
	}
}
