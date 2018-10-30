import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';

@Injectable({
	providedIn: 'root',
})

export class QuestionService {
	constructor(private api: ApiService) { }

	getQuestions(): Observable<any> {
		return this.api.getAll('/questions');
	}
}
