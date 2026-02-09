let browser = "Chrome";

function checkBrowserVersion(callback){
  setTimeout(function () {
    callback();
  }, 2000);
}

function callbackfunction() {
    console.log(`Browser version using callback:  ${browser}`)
}


checkBrowserVersion(callbackfunction)