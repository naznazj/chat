import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service'; // Import the ChatService
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
})
export class ConversationComponent implements OnInit {
  messages: { sender: string; message: string; time: string; type: 'sent' | 'received' }[] = [];
  newMessage: string = '';
  selectedCategory: string = 'all';  // Default category

  constructor(private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetching messages by category (you could enhance this by using route params to change the category)
    this.messages = this.chatService.getMessagesByType(this.selectedCategory);
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message = {
        sender: 'You',
        message: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'sent' as 'sent',  // Explicitly setting the type to 'sent'
      };

      // Add the new message to the messages in the chat service (e.g., 'all' category)
      this.chatService.sendMessage(this.newMessage, this.selectedCategory);
      this.messages = this.chatService.getMessagesByType(this.selectedCategory);  // Refresh the displayed messages

      this.newMessage = '';  // Clear the input field
    }
  }
}
