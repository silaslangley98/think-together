import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../shared/services/api.service';
import { UtilsService } from '../../shared/services/utils.service';

import { Answer } from '../shared/Answer';

@Injectable({
	providedIn: 'root'
})

export class AnswerService {
	path: string = '/answers';
	answer: Answer;

	constructor(private api: ApiService, private utils: UtilsService) { }

	public getAnswers(question_id): Observable<any> {
		const filter = {
			key   : "question_id",
			value : question_id,
		};

		return this.api.getAll(this.path, filter)
			.pipe(map(answers => answers.sort(this.sortByPostedDate)));
	}

	public addAnswer(message, question_id): void {
		this.answer = {
			message,
			question_id,
			posted : new Date().getTime(),
			slug   : this.utils.generateSlug(),
		};

		this.api.add(this.path, this.answer);
	}

	private sortByPostedDate(first, second) {
		if (first.posted < second.posted) return -1;

		if (first.posted > second.posted) return 1;

		return 0;
	}
}