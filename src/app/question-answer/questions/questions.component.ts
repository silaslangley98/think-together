import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionService } from '../shared/question.service';

import { Question } from '../shared/question';

@Component({
	selector    : 'app-questions',
	templateUrl : './questions.component.html',
	styleUrls   : ['./questions.component.scss'],
})

export class QuestionsComponent implements OnInit {
	public questions$: Observable<Question[]>;

	constructor(private questionService: QuestionService) { }

	ngOnInit() {
		this.getQuestions();
	}

	trackByQuestionId({}, question: Question): string {
		return question.id;
	}

	private getQuestions(): void {
		this.questions$ = this.questionService.getQuestions();
	}
}
