import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: [],
})
export class ChatWidgetComponent implements OnInit {
  isChatOpen = false;
  newMessage = '';
  messagesList: { sender: 'user' | 'bot'; text: string }[] = [];

  @ViewChild('messages') messagesContainer!: ElementRef;

  ngOnInit() {
    // Load the external chat widget script dynamically on component init
    this.loadChatWidget();
  }

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

  private loadChatWidget() {
    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://chat-75vz.vercel.app/chat-widget.js'; // Replace with your hosted URL
    widgetScript.async = true;

    // Error handling for failed script load
    widgetScript.onerror = (error) => {
      console.error('Failed to load chat widget:', error);
    };

    // Append the script tag to the document body
    document.body.appendChild(widgetScript);

    widgetScript.onload = () => {
      console.log('Chat widget loaded successfully');
    };
  }
}
