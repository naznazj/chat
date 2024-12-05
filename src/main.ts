import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Ensure DOMContentLoaded only applies this logic when the widget is embedded
document.addEventListener('DOMContentLoaded', () => {
  // Check if the chat widget container already exists to avoid duplication
  if (!document.getElementById('chat-widget-container')) {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-widget-container';
    document.body.appendChild(chatContainer);
  }
});
