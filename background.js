

document.addEventListener('DOMContentLoaded', function(){
    
	
	
	
	chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  

				
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  
      
	  chrome.storage.sync.get(/* String or Array */["videolink"], function(items){
			 // items = [ { "yourBody": "myBody" } ]
			 
			if (items.videolink ==null) items.videolink = [];
			
			items.videolink.push(request.videolink)
				
			
			chrome.storage.sync.set(   items, function(){
			});
			
			//alert(JSON.stringify(items));
			
		});
  

  }
);
	
	
});

