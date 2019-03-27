import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmail} from '../../types/emailsEditor';

@Component({
	selector: 'app-emails-editor',
	template: `
        <div>
            <div class="emailsEditor">
                <div class="header">Share <strong>Board name</strong> with other</div>
                <div class="emailBlock">
                    <app-email-block
                            *ngFor="let item of emailsArr"
                            [emailObject]="item"
                            (onDeleteClick)="onDeleteClick($event)"
                    ></app-email-block>
                    <input
                            class="input-elem fontClass"
                            placeholder="add more people..."
                            (keydown.enter)="handleEnterOrBlur()"
                            (keydown.control.v)="handleCtrlVClick()"
                            (keydown.backspace)="handleBackspaceClick()"
                            (keydown)="keyDown($event)"
							(blur)="handleEnterOrBlur()"
                            [(ngModel)]="emailName"
                    />
                </div>
            </div>
            <div class="actions-block">
                <button class="fontClass" (click)="addEmail()">Add email</button>
                <button class="fontClass" (click)="getEmailCount()">Get email count</button>
            </div>
        </div>
	`,
	styleUrls: ['./emails-editor.component.less']
})

export class EmailsEditorComponent {
	@Input() emailsArr: IEmail[];

	public emailName = '';

	private mailHostArr = ['yandex', 'mail', 'yahoo', 'gmail', 'rambler'];
	private domainsArr = ['ru', 'com', 'au', 'at', 'az', 'al'];

	public handleEnterOrBlur() {
		this.addItem(this.emailName);
	}

	public keyDown(event) {
		if (event.code === 'Comma') {
			this.addItem(this.emailName);
			event.stopPropagation();
		}
	}

	public handleBackspaceClick() {
		this.emailsArr.splice(-1, 1);
	}

	public addEmail() {
		const randomName = this.makeRandomString(6);
		const randHost = this.mailHostArr[Math.floor(Math.random() * this.mailHostArr.length)];
		const randDomail = this.domainsArr[Math.floor(Math.random() * this.domainsArr.length)];
		this.addItem(`${randomName}@${randHost}.${randDomail}`);
	}

	public getEmailCount() {
		const validLength: number = this.emailsArr.reduce((result, current) => {
			if (current.isCorrect) {
				result += 1;
			}
			return result;
		}, 0);
		alert(`Кол-во валидных email ${validLength}`);
	}

	public handleCtrlVClick() {
		setTimeout(() => {
			this.addItem(this.emailName);
		}, 1);
	}

	private onDeleteClick(emailId: number) {
		this.emailsArr = this.emailsArr.filter(item => item.id !== emailId);
	}

	private addItem(emailName: string) {
		if (!emailName) {
			return;
		}

		// взято с http://emailregex.com/
		const regexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		const tempEmail: IEmail = {
			id: this.emailsArr.length + 1,
			name: this.emailName.length > 0 ? this.emailName : emailName,
			isCorrect: regexp.test(this.emailName.length > 0 ? this.emailName : emailName)
		};

		this.emailsArr.push(tempEmail);
		setTimeout(() => {
			this.emailName = '';
		}, 1);
	}

	/**
	 * Взято тут
	 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
	 */
	private makeRandomString(length: number): string {
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
}
