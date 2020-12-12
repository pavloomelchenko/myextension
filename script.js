

document.addEventListener('keypress', test1);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}



function test1(e){
	
	if (e.code!='KeyB'){  return;
	}
	
	time=10;
	ytplayer = document.getElementById("movie_player");
    time = Math.round( ytplayer.getCurrentTime() );
	 
	window.alert("Bookmarked " + time);
	
	
	
	
	var data = {
	  allowedTypes: 'those supported by structured cloning, see the list below',
	  inShort: 'no DOM elements or classes/functions',
	  greeting: 'hello',
	  videolink: window.location.href + '&t=' + time
	};

	document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
	
}