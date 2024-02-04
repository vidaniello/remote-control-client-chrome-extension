'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  if (request.type === 'updateCounterHtmlFromPopup') {
    //updateCounterHtml(request.count);
    //console.log("counter set to "+request.count);
    chrome.runtime.sendMessage({
      type: 'updateCounterHtmlFromBackground',
      count: request.count
    });
  }
  return true;
});


var d = chrome.sockets;
var t = 0;
/*
chrome.sockets.udp.create({}, function(socketInfo) {
  // The socket is created, now we can send some data
  var socketId = socketInfo.socketId;
  
  chrome.sockets.udp.send(socketId, arrayBuffer,
    '127.0.0.1', 1337, function(sendInfo) {
      console.log("sent " + sendInfo.bytesSent);
  });
  
});
*/