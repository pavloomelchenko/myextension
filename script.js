





function test1(){
	// ytplayer = document.getElementById("movie_player");
    // time = ytplayer.getCurrentTime();
	 
	// window.alert(time);
	
	
	// chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
      // console.log('Settings saved');
    // });
	
	chrome.runtime.sendMessage("mnaepeklbelbhnmcejfljcdmbadpkmgh",{method: "getStatus"}, function(response) {
	  console.log(response.status);
	});
}