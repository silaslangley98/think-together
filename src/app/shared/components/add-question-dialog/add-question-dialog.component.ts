import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector    : 'app-add-question-dialog',
	templateUrl : './add-question-dialog.component.html',
	styleUrls   : ['./add-question-dialog.component.scss']
})
export default class AddQuestionDialogComponent implements OnInit {
	constructor() { }

	addQuestionForm = new FormGroup({
		question : new FormControl(''),
	});

	ngOnInit() {
	}
}
