import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';

@Injectable({
	providedIn: 'root'
})

export class AnswerService {
	path: string = '/answers';

	constructor(private api: ApiService) { }

	public getAnswers(question_id): Observable<any> {
		const filter = {
			key   : "question_id",
			value : question_id,
		};

		return this.api.getAll(this.path, filter)
			.pipe(map(answers => answers.sort(this.sortByPostedDate)));
	}

	private sortByPostedDate(first, second) {
		if (first.posted < second.posted) return -1;

		if (first.posted > second.posted) return 1;

		return 0;
	}
}
