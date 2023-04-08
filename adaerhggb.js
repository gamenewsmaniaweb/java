if(typeof adsbygoogle !== 'undefined'){
  // AdSense script has loaded

  var intervalId = setInterval(function() {
    // Get the ad element
    var adElement = document.querySelector('ins.mobBTAD');
    // Check if the ad was filled
    if(adElement.getAttribute('data-ad-status') === 'filled') {
      // Add class 'v' to the parent element with ID 'ADShowM'
      document.getElementById("ADShowM").classList.add("v");
      console.log("AdSense script has loaded successfully and ad was filled");
      clearInterval(intervalId); // Stop checking for the ad status
    }
    // Increase the elapsed time by 1 second
    elapsedSeconds++;
    // Stop checking if 5 seconds have elapsed
    if(elapsedSeconds >= 5) {
      clearInterval(intervalId);
    }
  }, 1000); // Check every 1 second
  var elapsedSeconds = 0;
  // Add your functionality here
}
