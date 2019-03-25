import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmail} from '../../types/emailsEditor';

@Component({
	selector: 'app-email-block',
	template: `
		<div [className]="emailObject.isCorrect ? 'mailElem' : 'mailElem dotted'">
			<div>{{emailObject.name}}</div>
			<img
				src="https://img.icons8.com/small/16/000000/multiply.png"
				alt="closeIcon"
				class="closeIcon"
				(click)="handleDeleteButton(emailObject.id)"
			/>
		</div>
	`,
	styleUrls: ['./email-block.component.less']
})

export class EmailBlockComponent {
	@Input() emailObject: IEmail;
	@Output() onDeleteClick = new EventEmitter<number>();
	handleDeleteButton(emailId: number) {
		this.onDeleteClick.emit(emailId);
	}
}
