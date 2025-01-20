import { enableProdMode, Injector } from '@angular/core';
import { environment } from './environments/environment';
import { createCustomElement } from '@angular/elements';
import { ChatWidgetComponent } from './app/chat-widget/chat-widget.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; // Corrected to provideAnimations

if (environment.production) {
  enableProdMode();
}

const injector = Injector.create({providers: []});
const chatWidgetElement = createCustomElement(ChatWidgetComponent, { injector });
customElements.define('chat-widget', chatWidgetElement);

// Ensure DOMContentLoaded only applies this logic when the widget is embedded
document.addEventListener('DOMContentLoaded', () => {
  // Check if the chat widget container already exists to avoid duplication
  if (!document.getElementById('chat-widget-container')) {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-widget-container';
    document.body.appendChild(chatContainer);
  }

  // Bootstrap the Angular app only once the chat widget container is ready
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes), // Register your routes here
      provideHttpClient(), 
      provideAnimations() // Register HttpClient
    ],
  })
  .catch((err) => console.error(err));
});
