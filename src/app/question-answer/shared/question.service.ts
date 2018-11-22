import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';

@Injectable({
	providedIn : 'root',
})

export class QuestionService {
	path: string = '/questions';

	constructor(private api: ApiService) { }

	public getQuestions(): Observable<any> {
		return this.api.getAll(this.path);
	}

	public addQuestion(question): void {
		this.api.add(this.path, question);
	}
}
