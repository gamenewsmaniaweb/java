if(typeof adsbygoogle !== 'undefined'){
  // AdSense script has loaded
  
  // Get the ad element
  var adElement = document.querySelector('ins.mobBTAD');
  // Check if the ad was filled
  if(adElement.getAttribute('data-ad-status') === 'filled') {
    // Add class 'v' to the parent element with ID 'ADShowM'
    document.getElementById("ADShowM").classList.add("v");
    alert("AdSense script has loaded successfully and ad was filled");
  }
  // Add your functionality here
}
