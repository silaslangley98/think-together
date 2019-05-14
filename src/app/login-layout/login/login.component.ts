import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { LoginService } from '../login.service';

import { VALIDATORS } from '../../shared/constants/validators';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	loginResponse:string = '';

	constructor(private auth: AuthService, private loginService: LoginService) { }

	loginForm = new FormGroup({
		email    : new FormControl('', this.loginService.getEmailValidators()),
		password : new FormControl('', this.loginService.getPasswordValidators()),
	});

	ngOnInit() {
	}

	async login() {
		this.loginResponse = await this.auth.login(this.loginForm.value);
	}

	public hasError(controlName: string, errorName: string) {
		return this.loginForm.controls[controlName].hasError(errorName);
	}

	public getValidators(inputType:string) {
		return this.loginService.getValidators(inputType);
	}
}
