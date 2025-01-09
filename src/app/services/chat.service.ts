import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messages: { [key: string]: { sender: string; message: string; time: string; type: 'sent' | 'received'; ipLocation: string }[] } = {
    all: [
      { sender: 'Mary Franci', message: 'Can I try the software first?', time: '10:00', type: 'received', ipLocation: '192.168.0.1' },
      { sender: 'You', message: 'Sure. Here is the demo unit. You can use it as long as you want.', time: '10:02', type: 'sent', ipLocation: '192.168.0.2' },
      { sender: 'Carlos Dakkis', message: 'It works for me. Thanks!', time: '11:30', type: 'received', ipLocation: '192.168.0.3' },
      { sender: 'Maria Vetovs', message: 'Let’s stay in touch. Thank you!', time: '12:15', type: 'received', ipLocation: '192.168.0.4' },
      { sender: 'Omar Vetovs', message: 'Voice message received. Let me check.', time: '13:00', type: 'received', ipLocation: '192.168.0.5' },
      { sender: 'Marcus Bergson', message: 'I need help with my account setup.', time: '14:20', type: 'received', ipLocation: '192.168.0.6' },
    ],
    assigned: [
      { sender: 'Aspen Workman', message: 'Hello! I am looking for a new product recommendation.', time: '09:00', type: 'received', ipLocation: '192.168.1.1' },
      { sender: 'You', message: 'Sure, let me show you some options.', time: '09:10', type: 'sent', ipLocation: '192.168.1.2' },
      { sender: 'Rhiel Madsen', message: 'Typing... I will send the details shortly.', time: '10:00', type: 'received', ipLocation: '192.168.1.3' },
      { sender: 'Carlos Dakkis', message: 'I need help with billing. Can you assist?', time: '11:30', type: 'received', ipLocation: '192.168.1.4' },
    ],
    unassigned: [
      { sender: 'Marcus Bergson', message: 'I have an issue with my subscription.', time: '10:45', type: 'received', ipLocation: '192.168.2.1' },
      { sender: 'Hanna Lee', message: 'Can someone help with the onboarding process?', time: '11:00', type: 'received', ipLocation: '192.168.2.2' },
      { sender: 'Anna Jackson', message: 'I’m facing an error with my login. Please assist!', time: '11:30', type: 'received', ipLocation: '192.168.2.3' },
    ],
    drafts: [
      { sender: 'You', message: 'Draft message 1', time: '10:00', type: 'sent', ipLocation: '192.168.3.1' },
      { sender: 'You', message: 'Draft message 2', time: '10:30', type: 'sent', ipLocation: '192.168.3.2' },
    ],
  };

  constructor() {}

  // Get messages by category (type)
  getMessagesByType(type: string): { sender: string; message: string; time: string; type: 'sent' | 'received'; ipLocation: string }[] {
    return this.messages[type] || [];
  }

  // Send a message (simulating with fake IP)
  sendMessage(newMessage: string, category: string = 'all'): void {
    if (newMessage.trim()) {
      const fakeIp = '192.168.99.99'; // Hardcoded fake IP address for sending
      const message = {
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'sent' as 'sent', // Explicitly setting the type as 'sent'
        ipLocation: fakeIp, // Hardcoded fake IP location
      };

      // Push the new message to the specified category
      if (this.messages[category]) {
        this.messages[category].push(message);
      } else {
        console.error('Invalid category provided');
      }
    }
  }

  // Edit a message
  editMessage(index: number, newMessage: string, category: string): void {
    if (this.messages[category] && this.messages[category][index]) {
      this.messages[category][index].message = newMessage;
    }
  }

  // Delete a message
  deleteMessage(index: number, category: string): void {
    if (this.messages[category] && this.messages[category][index]) {
      this.messages[category].splice(index, 1);
    }
  }
}
