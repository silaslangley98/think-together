import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../authentication/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	constructor(private auth: AuthService) { }

	loginForm = new FormGroup({
		email    : new FormControl(''),
		password : new FormControl(''),
	});

	ngOnInit() {
	}

	login() {
		this.auth.login(this.loginForm.value);
	}
}
