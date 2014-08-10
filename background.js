chrome.usb.getDevices({vendorId: 1027, productId: 24597}, function(devices){
  console.log(devices);
});