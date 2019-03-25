import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmailsEditorModule} from './components/emails-editor/emails-editor.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		EmailsEditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
