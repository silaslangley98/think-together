import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	constructor(private breakpointObserver: BreakpointObserver) {}

	@Output() toggledDrawer = new EventEmitter<boolean>();

	ngOnInit() {
	}

	public toggleDrawer():void {
		this.toggledDrawer.emit();
	}
}
