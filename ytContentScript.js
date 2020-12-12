



var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);





document.addEventListener('yourCustomEvent', function (e) {
  var data = e.detail;
  console.log('received', data);
  
  chrome.runtime.sendMessage(data, function(response) {
	  console.log(response.farewell);
	});
});

document.addEventListener('keypress', test1);