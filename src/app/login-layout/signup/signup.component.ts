import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { LoginService } from '../login.service';

@Component({
	selector    : 'app-signup',
	templateUrl : './signup.component.html',
	styleUrls   : ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
	signupResponse:string = '';
	signupForm: FormGroup;
	showPassword:boolean;
	showConfirmPassword:boolean;

	constructor(
		private auth: AuthService,
		private loginService: LoginService,
		private formBuilder: FormBuilder
	) {
		this.showPassword = false;
		this.showConfirmPassword = false;
	}

	ngOnInit() {
		this.signupForm = this.formBuilder.group({
			name            : ['', this.loginService.getNameValidators()],
			email           : ['', this.loginService.getEmailValidators()],
			password        : ['', this.loginService.getPasswordValidators()],
			confirmPassword : [''],
		}, { validator : this.loginService.doPasswordsMatch });
	}

	async signup() {
		const { confirmPassword, name, ...signupCredentials } = this.signupForm.value;

		this.signupResponse = await this.auth.signup(signupCredentials, name);
	}

	public hasError(controlName: string, errorName: string) {
		return this.signupForm.get(controlName).hasError(errorName)
	}

	public hasPasswordMatchError(controlName: string, errorName: string) {
		return this.signupForm.get(controlName).errors && this.signupForm.get(controlName).errors[errorName];
	}

	public getValidators(inputType:string) {
		return this.loginService.getValidators(inputType);
	}
}
