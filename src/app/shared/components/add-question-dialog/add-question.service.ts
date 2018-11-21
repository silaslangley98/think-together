import { Injectable } from '@angular/core';

import { QUESTION_TAGS } from '../../constants/question-tags';

@Injectable({
	providedIn: 'root'
})

export class AddQuestionService {
	constructor() { }

	getQuestionTags(): string[] {
		return QUESTION_TAGS;
	}
}
