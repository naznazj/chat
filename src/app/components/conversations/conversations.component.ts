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
  messages: { sender: string; message: string; time: string; type: 'sent' | 'received'; ipLocation: string }[] = [];
  newMessage: string = '';
  selectedCategory: string = 'all';  // Default category

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Fetching messages based on the default category
    this.fetchMessagesByCategory();
    
    const themeColors = localStorage.getItem('themeColors');
    if (themeColors) {
      const colors = JSON.parse(themeColors);
      document.documentElement.style.setProperty('--primary-color', colors.primary);
      document.documentElement.style.setProperty('--secondary-color', colors.secondary);
      document.documentElement.style.setProperty('--accent-color', colors.accent);
      document.documentElement.style.setProperty('--whites-color', colors.whites);
    }
  }

  // Method to fetch messages for the selected category
  fetchMessagesByCategory(): void {
    this.messages = this.chatService.getMessagesByType(this.selectedCategory);
  }

  // Method to change the category
  changeCategory(category: string): void {
    this.selectedCategory = category;
    this.fetchMessagesByCategory();
  }

  // Method to send a message
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage, this.selectedCategory);
      this.fetchMessagesByCategory();  // Refresh the displayed messages
      this.newMessage = '';  // Clear the input field
    }
  }

  // Method to edit a message
  editMessage(index: number): void {
    const newMessage = prompt('Edit message:', this.messages[index].message);
    if (newMessage !== null) {
      this.chatService.editMessage(index, newMessage, this.selectedCategory);
      this.fetchMessagesByCategory();  // Refresh the displayed messages
    }
  }

  // Method to delete a message
  deleteMessage(index: number): void {
    if (confirm('Are you sure you want to delete this message?')) {
      this.chatService.deleteMessage(index, this.selectedCategory);
      this.fetchMessagesByCategory();  // Refresh the displayed messages
    }
  }

  // Method to view message details
  viewDetails(index: number): void {
    const message = this.messages[index];
    alert(`Message details:\nSender: ${message.sender}\nTime: ${message.time}\nMessage: ${message.message}\nLocation: ${message.ipLocation}`);
  }
}
