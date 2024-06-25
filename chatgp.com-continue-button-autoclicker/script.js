function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function main() {

  while(true){
    try {
      let a = document.getElementsByClassName("btn relative btn-secondary whitespace-nowrap border-0 md:border");
      a[0].click();
      console.log("Clicked");
    }
    catch(err) {
      //console.log("Error: " + err);
    }
    await sleep(200);
  }

}

if (window.location.href.indexOf("https://chatgpt.com/") > -1) {

  main();

}

