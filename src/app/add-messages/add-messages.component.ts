import { Component } from '@angular/core';
import { MessagesService, Message } from '../messages.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-messages',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {
  message: Message = {
    nombre: '',
    apellido: '',
    cedula: ''
  };

  constructor(public messagesService: MessagesService) {}

  addMessage() {
    this.messagesService.add(this.message);
    this.message = { nombre: '', apellido: '', cedula: '' };
  }
}
