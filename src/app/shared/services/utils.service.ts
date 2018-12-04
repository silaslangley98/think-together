import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class UtilsService {

	constructor() { }

	generateSlug():string {
		let slug = '';
		let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

		for (let i = 0; i < 5; i++) {
			slug += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		return slug;
	}
}
