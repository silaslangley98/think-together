import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-title-group',
	templateUrl: './title-group.component.html',
	styleUrls: ['./title-group.component.scss']
})

export class TitleGroupComponent implements OnInit {
	@Input() email: string;
	@Input() name: string;

	constructor() { }

	ngOnInit() {
	}
}
