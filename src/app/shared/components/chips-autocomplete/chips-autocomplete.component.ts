import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
	selector    : 'app-chips-autocomplete',
	templateUrl : './chips-autocomplete.component.html',
	styleUrls   : ['./chips-autocomplete.component.scss'],
})

export class ChipsAutocompleteComponent {

	@Input() formGroup: FormGroup;
	@Input() allTags: string[];
	@Output() updateTags = new EventEmitter<string[]>();

// the following code, with minor modifications, is taken from:
//    https://material.angular.io/components/chips/overview

	visible = true;
	selectable = true;
	removable = true;
	addOnBlur = true;
	separatorKeysCodes: number[] = [ENTER, COMMA];
	tagCtrl = new FormControl();
	filteredTags: Observable<string[]>;
	tags: string[] = [];

	@ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>
	@ViewChild('auto') matAutocomplete: MatAutocomplete;

	constructor() {
		this.filteredTags = this.tagCtrl.valueChanges.pipe(
			startWith(null),
			map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
	}

	add(event: MatChipInputEvent): void {
		// Add tag only when MatAutocomplete is not open
		// To make sure this does not conflict with OptionSelected Event
		if (!this.matAutocomplete.isOpen) {
			const input = event.input;
			const value = event.value;

			// Add our tag
			if ((value || '').trim()) {
				this.tags.push(value.trim());
			}

			// Reset the input value
			if (input) {
				input.value = '';
			}

			this.tagCtrl.setValue(null);

			this.updateTags.emit(this.tags);
		}
	}

	remove(tag: string): void {
		const index = this.tags.indexOf(tag);

		if (index >= 0) {
			this.tags.splice(index, 1);
			this.updateTags.emit(this.tags);
		}
 	}

	selected(event: MatAutocompleteSelectedEvent): void {
		this.tags.push(event.option.viewValue);
		this.tagInput.nativeElement.value = '';
		this.tagCtrl.setValue(null);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();

		return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
	}
}
