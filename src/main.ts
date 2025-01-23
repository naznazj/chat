import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Include HttpClient
import { ChatWidgetComponent } from './app/chat-widget/chat-widget.component';



// Ensure DOMContentLoaded only applies this logic when the widget is embedded
document.addEventListener('DOMContentLoaded', () => {
  // Check if the chat widget container already exists to avoid duplication
  if (!document.getElementById('chat-widget-container')) {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-widget-container';
    document.body.appendChild(chatContainer);
  }
});

bootstrapApplication(ChatWidgetComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error('Bootstrap Error:', err));
