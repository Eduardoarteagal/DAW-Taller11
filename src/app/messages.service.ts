import { Injectable } from '@angular/core';

export interface Message {
  nombre: string;
  apellido: string;
  cedula: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: Message[] = [];

  add(message: Message) {
    this.messages.push(message);
  }
}
