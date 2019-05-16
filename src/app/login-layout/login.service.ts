import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

import { VALIDATORS } from '../shared/constants/validators';

@Injectable({
	providedIn: 'root'
})

export class LoginService {
	passwordPattern:string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$';

	constructor() { }

	public getNameValidators() {
		return Validators.required;
	}

	public getEmailValidators() {
		return [ Validators.required, Validators.email ];
	}

	public getPasswordValidators() {
		return Validators.compose([
			Validators.minLength(6),
			Validators.required,
			Validators.pattern(this.passwordPattern),
		]);
	}

	public getValidators(inputType:string) {
		return VALIDATORS[inputType];
	}

	public doPasswordsMatch(control: AbstractControl) {
		let password = control.get('password').value;
		let confirmPassword = control.get('confirmPassword').value;

		if (password !== confirmPassword)
			control.get('confirmPassword').setErrors( { noMatch: true} );

		else return null;
	}
}
