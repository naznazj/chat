import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // Define the structure for messages
  private messages: { [key: string]: { sender: string; message: string; time: string; type: 'sent' | 'received' }[] } = {
    all: [
      { sender: 'Mary Franci', message: 'Can I try the software first?', time: '10:00', type: 'received' },
      { sender: 'You', message: 'Sure. Here is the demo unit. You can use it as long as you want.', time: '10:02', type: 'sent' },
      { sender: 'Carlos Dakkis', message: 'It works for me. Thanks!', time: '11:30', type: 'received' },
      { sender: 'Maria Vetovs', message: 'Let’s stay in touch. Thank you!', time: '12:15', type: 'received' },
      { sender: 'Omar Vetovs', message: 'Voice message received. Let me check.', time: '13:00', type: 'received' },
      { sender: 'Marcus Bergson', message: 'I need help with my account setup.', time: '14:20', type: 'received' },
    ],
    assigned: [
      { sender: 'Aspen Workman', message: 'Hello! I am looking for a new product recommendation.', time: '09:00', type: 'received' },
      { sender: 'You', message: 'Sure, let me show you some options.', time: '09:10', type: 'sent' },
      { sender: 'Rhiel Madsen', message: 'Typing... I will send the details shortly.', time: '10:00', type: 'received' },
      { sender: 'Carlos Dakkis', message: 'I need help with billing. Can you assist?', time: '11:30', type: 'received' },
    ],
    unassigned: [
      { sender: 'Marcus Bergson', message: 'I have an issue with my subscription.', time: '10:45', type: 'received' },
      { sender: 'Hanna Lee', message: 'Can someone help with the onboarding process?', time: '11:00', type: 'received' },
      { sender: 'Anna Jackson', message: 'I’m facing an error with my login. Please assist!', time: '11:30', type: 'received' },
    ],
    liveChat: [
      { sender: 'Rhiel Madsen', message: 'Typing...', time: 'Just now', type: 'received' },
      { sender: 'Sarah Conners', message: 'How can I use this feature?', time: '10:00', type: 'received' },
      { sender: 'You', message: 'It’s simple. Just click on the settings button.', time: '10:02', type: 'sent' },
      { sender: 'Tom Harris', message: 'Can I upgrade my plan directly?', time: '10:30', type: 'received' },
    ],
  };

  constructor() {}

  // Get messages by type
  getMessagesByType(type: string): { sender: string; message: string; time: string; type: 'sent' | 'received' }[] {
    return this.messages[type] || [];
  }

  sendMessage(newMessage: string, category: string = 'all'): void {
    if (newMessage.trim()) {
      const message = {
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'sent' as 'sent',  // Explicitly setting the type as 'sent'
      };

      // Push the new message to the specified category (default is 'all')
      if (this.messages[category]) {
        this.messages[category].push(message);
      } else {
        console.error('Invalid category provided');
      }
    }
  }
}
