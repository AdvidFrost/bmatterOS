// app-bundle.js
// Fetches app.html content and stores it as APP_HTML for the cloaker to inject

fetch('/app.html')
  .then(r => r.text())
  .then(html => {
    window.APP_HTML = html;
  })
  .catch(() => {
    // Fallback: redirect directly to app.html if fetch fails
    window.APP_HTML = null;
  });
