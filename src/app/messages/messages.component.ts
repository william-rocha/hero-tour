import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor, NgIf],
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}