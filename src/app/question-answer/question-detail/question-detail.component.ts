import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../shared/question.service';

import { Question } from '../shared/question';

@Component({
	selector: 'app-question-detail',
	templateUrl: './question-detail.component.html',
	styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
	question: Question;

	constructor(private questionService: QuestionService) { }

	ngOnInit() {
		this.getQuestion();
	}

	getQuestion():void {
		this.question = this.questionService.getQuestion();
	}
}
