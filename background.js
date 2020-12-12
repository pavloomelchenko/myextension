

document.addEventListener('DOMContentLoaded', function(){
    
	
	
	// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		// if (request.method == "getStatus")
		  // sendResponse({status: localStorage['status']});
		// else{
		  // console.log("message type does not exist" );
		  // sendResponse({}); // snub them.
		// }
	// });
	
	chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  }
);
	
	
	
	
	
	//alert("working");
});

