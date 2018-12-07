import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { UsersService } from '../../shared/services/users.service';

import { Question } from './question';

@Injectable({
	providedIn : 'root',
})

export class QuestionService {
	path: string = '/questions';
	question: Question;

	constructor(private api: ApiService, private users: UsersService) {}

	public getQuestion(): Question {
		return this.question;
	}

	public getQuestions(): Observable<any> {
		return this.api.getAll(this.path, null);
	}

	public selectQuestion(question): void {
		this.question = question;
	}

	public addQuestion(question): void {
		const newQuestion = Object.assign(question, {
			createdAt : new Date().getTime(),
			author    : this.users.getCurrentUser().name,
			question  : question.question.replace(/\?/g,''),
		});

		this.api.add(this.path, newQuestion);
	}
}
