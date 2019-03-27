import {Component} from '@angular/core';
import {IEmail} from './types/emailsEditor';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})

export class AppComponent {
	public emailsArr: IEmail[] = [
		{
			id: 1,
			name: 'petrov@yandex.ru',
			isCorrect: true
		},
		{
			id: 2,
			name: 'ivanov@google',
			isCorrect: false
		}
	];
}
