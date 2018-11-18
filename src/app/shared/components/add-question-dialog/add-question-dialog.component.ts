import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from "@angular/material";

@Component({
	selector    : 'app-add-question-dialog',
	templateUrl : './add-question-dialog.component.html',
	styleUrls   : ['./add-question-dialog.component.scss']
})
export default class AddQuestionDialogComponent implements OnInit {
	constructor(
		private dialogRef : MatDialogRef<AddQuestionDialogComponent>
	) { }

	addQuestionForm = new FormGroup({
		question : new FormControl(''),
	});

	ngOnInit() {
	}

	cancel() {
		this.dialogRef.close();
	}

	save() {
		this.dialogRef.close(this.addQuestionForm.value);
	}
}
