import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
  messages: string[] = [];
  ngOnInit(): void {
    this.getMessages();
  }
  getMessages(): void {
    this.messageService
      .getMessages()
      .subscribe((messages) => (this.messages = messages));
  }
}
