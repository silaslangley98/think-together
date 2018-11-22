import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material';

import AddQuestionDialogComponent from '../../shared/components/add-question-dialog/add-question-dialog.component';

import { QuestionService } from '../shared/question.service';

import { Question } from '../shared/question';

@Component({
	selector    : 'app-questions',
	templateUrl : './questions.component.html',
	styleUrls   : ['./questions.component.scss'],
})

export class QuestionsComponent implements OnInit {
	public questions$: Observable<Question[]>;

	constructor(public dialog: MatDialog, private questionService: QuestionService) { }

	ngOnInit() {
		this.getQuestions();
	}

	trackByQuestionId({}, question: Question): string {
		return question.id;
	}

	openAddQuestionDialog(): void {
		const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
			minWidth : '250px',
			width    : '50%',
		});

		dialogRef.afterClosed().subscribe(question => {
			if (question) {
				this.questionService.addQuestion(question);
			}
		});
	}

	private getQuestions(): void {
		this.questions$ = this.questionService.getQuestions();
	}
}
