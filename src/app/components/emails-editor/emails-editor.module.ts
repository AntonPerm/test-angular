import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {EmailsEditorComponent} from './emails-editor.component';
import {EmailBlockComponent} from '../email-block/email-block.component';

@NgModule({
	declarations: [
		EmailsEditorComponent,
		EmailBlockComponent
	],
	exports: [
		EmailsEditorComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [EmailsEditorComponent]
})

export class EmailsEditorModule {}
