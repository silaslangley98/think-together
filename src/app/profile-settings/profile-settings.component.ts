import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginService } from '../login-layout/login.service';
import { UsersService } from '../shared/services/users.service';

import { User } from '../shared/classes/User';

@Component({
	selector: 'app-profile-settings',
	templateUrl: './profile-settings.component.html',
	styleUrls: ['./profile-settings.component.scss'],
})

export class ProfileSettingsComponent implements OnInit {
	updateProfileForm: FormGroup;
	currentUser: User;
	selectedFile: File;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private users: UsersService
	) {
		this.currentUser = this.users.getCurrentUser();
	}

	onFileChanged(event) {
		this.selectedFile = event.target.files[0]
	}

	ngOnInit() {
		this.updateProfileForm = this.formBuilder.group({
			name   : ['', this.loginService.getNameValidators()],
			email  : ['', this.loginService.getEmailValidators()],
			avatar : [''],
		});
	}
}
