import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/components/shared-component.module';

import { HeaderComponent } from './header/header.component';
import { HomeLayoutComponent } from './home-layout.component';

@NgModule({
	declarations: [ HeaderComponent, HomeLayoutComponent ],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule,
		SharedModule,
	]
})
export class HomeLayoutModule { }