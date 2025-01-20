import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatWidgetComponent } from './chat-widget/chat-widget.component'; // Standalone component
import { createCustomElement } from '@angular/elements';

// AppModule definition for Standalone Component
@NgModule({
  imports: [
    BrowserModule, // Import necessary modules like BrowserModule
  ],
  providers: [],
  // We no longer need `declarations` or `bootstrap` here because it's not used for standalone components
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // Create custom element (web component) from the standalone component
    const chatWidgetElement = createCustomElement(ChatWidgetComponent, { injector: this.injector });
    customElements.define('app-chat-widget', chatWidgetElement); // Register the custom element
  }
}
