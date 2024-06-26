import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMessagesComponent } from '../add-messages/add-messages.component';
import { ListMessagesComponent } from '../list-messages/list-messages.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, AddMessagesComponent, ListMessagesComponent],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {}
