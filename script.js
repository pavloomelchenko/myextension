

document.addEventListener('keypress', bookmarkTime);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}



function bookmarkTime(e){

	var location = window.location.href;
	if (e.ctrlKey && e.code =='KeyB'  ){
	    //continue
	}else{
	    return;
	}
	
	var time=0;
	var ytplayer = document.getElementById("movie_player");
    var time = Math.round( ytplayer.getCurrentTime() );
	 
	window.alert("Bookmarked " + time);

	let regex = /&t=[0-9]*/g;

	location = location.replace(regex, '');
	
	
	var data = {
	  allowedTypes: 'those supported by structured cloning, see the list below',
	  inShort: 'no DOM elements or classes/functions',
	  greeting: 'hello',
	  videolink: {
	    "location": location + '&t=' + time ,
	    "tabName": document.title
	  }
	};

	document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
	
}