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

		return this.api.getAll(this.path, filter);
	}
}
