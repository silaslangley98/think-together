import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';

@Injectable({
	providedIn : 'root',
})

export class QuestionService {
	constructor(private api: ApiService) { }

	public getQuestions(): Observable<any> {
		return this.api.getAll('/questions');
	}
}
