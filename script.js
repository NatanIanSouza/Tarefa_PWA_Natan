if ('serviceWorker' in navigator) {
 window.addEventListener('load', function() {
 navigator.serviceWorker.register('/sw.js').then(function(registration) {
 // Registration was successful
 console.log('O ServiceWorker está funcionando: ', registration.scope);
 }, function(err) {
 // registration failed :(
 console.log('ServiceWorker registration failed: ', err);
 });
 });
}
