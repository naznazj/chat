import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, ElementRef, input, NgModule, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  standalone:true,
  imports:[CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: [],
})
export class ChatWidgetComponent {
  isChatOpen = false;
  newMessage = '';
  messagesList: { sender: 'user' | 'bot'; text: string }[] = [];

  @ViewChild('messages') messagesContainer!: ElementRef;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      setTimeout(() => this.scrollToBottom(), 0);
    }
  }

  closeChat() {
    this.isChatOpen = false;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      // Add user's message
      this.messagesList.push({ sender: 'user', text: this.newMessage });

      // Simulate bot's reply
      setTimeout(() => {
        this.messagesList.push({
          sender: 'bot',
          text: 'Thanks for your message! How can I help?',
        });
        this.scrollToBottom();
      }, 1000);

      // Clear input
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  private scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop =
        this.messagesContainer.nativeElement.scrollHeight;
    }
  }
}
