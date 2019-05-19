import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../../shared/services/auth.service';

@Component({
	selector    : 'app-header',
	templateUrl : './header.component.html',
	styleUrls   : ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	constructor(private auth: AuthService, private breakpointObserver: BreakpointObserver) {}

	@Output() toggledDrawer = new EventEmitter<boolean>();

	ngOnInit() {
	}

	public toggleDrawer():void {
		this.toggledDrawer.emit();
	}

	public logout():void {
		this.auth.logout();
	}
}
