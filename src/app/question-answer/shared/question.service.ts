import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';

import { Question } from './question';

@Injectable({
	providedIn : 'root',
})

export class QuestionService {
	path: string = '/questions';
	question: Question;

	constructor(private api: ApiService) { }

	public getQuestion(): Question {
		return this.question;
	}

	public getQuestions(): Observable<any> {
		return this.api.getAll(this.path);
	}

	public selectQuestion(question): void {
		this.question = question;
	}

	public addQuestion(question): void {
		question.createdAt = new Date().getTime();

		question.question = question.question.replace(/\?/g,'');

		this.api.add(this.path, question);
	}
}
