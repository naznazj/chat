import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChatWidgetComponent } from './app/chat-widget/chat-widget.component';

bootstrapApplication(ChatWidgetComponent).then(appRef => {
  // Create a custom element from the standalone ChatWidgetComponent
  const injector = appRef.injector;
  const chatWidgetElement = createCustomElement(ChatWidgetComponent, { injector });

  // Register the custom element with the browser
  customElements.define('app-chat-widget', chatWidgetElement);

  // Optional: Ensure the widget is embedded only once
  document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('chat-widget-container')) {
      const chatContainer = document.createElement('div');
      chatContainer.id = 'chat-widget-container';
      document.body.appendChild(chatContainer);

      // Create and attach the custom chat widget element
      const chatWidget = document.createElement('app-chat-widget');
      chatContainer.appendChild(chatWidget);
    }
  });
}).catch(err => {
  console.error('Error bootstrapping the application:', err);
});
