const BARE_SERVER = "https://tomp.app"

   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/uv/uv.sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', "/service/");
    }).catch(function(err) {
      //registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }else {
    console.log('No service-worker on this browser');
  }