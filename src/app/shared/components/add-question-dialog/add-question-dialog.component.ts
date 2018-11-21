import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from "@angular/material";

import { AddQuestionService } from './add-question.service';

@Component({
	selector    : 'app-add-question-dialog',
	templateUrl : './add-question-dialog.component.html',
	styleUrls   : ['./add-question-dialog.component.scss']
})
export default class AddQuestionDialogComponent implements OnInit {
	public questionTags: string[];

	constructor(
		private dialogRef          : MatDialogRef<AddQuestionDialogComponent>,
		private addQuestionService : AddQuestionService
	) { }

	addQuestionForm = new FormGroup({
		question : new FormControl(''),
	});

	ngOnInit() {
		this.questionTags = this.addQuestionService.getQuestionTags();
	}

	cancel() {
		this.dialogRef.close();
	}

	save() {
		this.dialogRef.close(this.addQuestionForm.value);
	}
}
