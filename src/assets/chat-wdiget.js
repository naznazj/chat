function loadChatWidget() {
    const widgetScript = document.createElement('script');
    widgetScript.src = '/assets/chat-widget.js';  // This is correct for Angular's assets path
    widgetScript.async = true;
  
    widgetScript.onload = () => {
      console.log('Chat widget loaded successfully');
    };
  
    widgetScript.onerror = () => {
      console.error('Failed to load chat widget.');
    };
  
    document.body.appendChild(widgetScript);
  }
  