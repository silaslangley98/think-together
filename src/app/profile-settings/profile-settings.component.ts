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
	updatedAvatar: File;
	avatarSource:any;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private users: UsersService
	) {
		this.currentUser = this.users.getCurrentUser();
	}

	onFileChanged(event) {
		this.updatedAvatar = event.target.files[0];

		const reader = new FileReader();

		reader.onload = () => {
			this.avatarSource = reader.result;
		};

		reader.readAsDataURL(this.updatedAvatar);
	}

	ngOnInit() {
		this.updateProfileForm = this.formBuilder.group({
			name   : ['', this.loginService.getNameValidators()],
			email  : ['', this.loginService.getEmailValidators()],
			avatar : [''],
		});
	}
}
