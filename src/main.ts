import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChatWidgetComponent } from './app/chat-widget/chat-widget.component';

bootstrapApplication(ChatWidgetComponent)
  .then(appRef => {
    // Create a custom element from the ChatWidgetComponent
    const injector = appRef.injector;
    const chatWidgetElement = createCustomElement(ChatWidgetComponent, { injector });

    // Register the custom element with the browser
    customElements.define('app-chat-widget', chatWidgetElement);

    // Wait for the DOM to be fully loaded before embedding the chat widget
    document.addEventListener('DOMContentLoaded', () => {
      const containerId = 'chat-widget-container';

      // Prevent duplicate embedding of the widget
      if (!document.getElementById(containerId)) {
        const chatContainer = document.createElement('div');
        chatContainer.id = containerId;
        document.body.appendChild(chatContainer);

        // Create and append the chat widget element
        const chatWidget = document.createElement('app-chat-widget');
        chatContainer.appendChild(chatWidget);
      }
    });
  })
  .catch(err => {
    console.error('Error bootstrapping the application:', err);
  });
