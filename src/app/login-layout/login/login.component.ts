import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

import { VALIDATORS } from '../../shared/constants/validators';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	loginResponse:string = '';

	constructor(private auth: AuthService) { }

	loginForm = new FormGroup({
		email    : new FormControl('', [ Validators.required, Validators.email ]),
		password : new FormControl('', [ Validators.compose([
				Validators.minLength(6),
		 		Validators.required,
		 		Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
			])
		])
	});

	ngOnInit() {
	}

	async login() {
		this.loginResponse = await this.auth.login(this.loginForm.value);
	}

	public hasError(controlName: string, errorName: string) {
		return this.loginForm.controls[controlName].hasError(errorName);
	}

	public getValidators(inputType) {
		return VALIDATORS[inputType];
	}
}
