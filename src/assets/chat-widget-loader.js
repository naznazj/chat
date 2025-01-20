//create a chat widget
(function() {
  var script = document.createElement('script');
  script.src = 'https://chat-75vz.vercel.app/dist/frontend/browser/main.js'; // Adjust the path to your Angular app's main.js
  script.onload = function() {
    document.addEventListener('DOMContentLoaded', function() {
      var chatWidget = document.createElement('app-chat-widget');
      document.body.appendChild(chatWidget);
    });
  };
  script.onerror = function(event) {
    console.error('Failed to load chat widget:', event);
  };
  document.head.appendChild(script);
})();

