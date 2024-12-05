import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-widget-container';
    document.body.appendChild(chatContainer);
  });
