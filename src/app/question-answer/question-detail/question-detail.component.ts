import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionService } from '../shared/question.service';
import { AnswerService } from '../shared/answer.service';

import { Question } from '../shared/question';

@Component({
	selector: 'app-question-detail',
	templateUrl: './question-detail.component.html',
	styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
	question: Question;
	public answers$: Observable<any[]>;

	constructor(
		private questionService: QuestionService,
		private answerService: AnswerService,
	) { }

	ngOnInit() {
		this.getQuestion();
		this.getAnswers();
	}

	getQuestion():void {
		this.question = this.questionService.getQuestion();
	}

	getAnswers():void {
		this.answers$ = this.answerService.getAnswers(this.question.id);
	}

	public trackByAnswerId({}, answer: any): string {
		return answer.id;
	}

	addAnswer(message: string) {
		this.answerService.addAnswer(message, this.question.id);
	}
}
