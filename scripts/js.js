var navbarElements = [
	{
	  'title': 'HOME',
	  'url': 'index.html'
	},
	{
	  'title': 'ABOUT',
	  'url': 'about.html'
	},
	{
	  'title': 'COMEDY',
	  'url': 'comedy.html'
	},
	{
	  'title': 'DRAMA',
	  'url': 'drama.html'
	},
	{
		'title': 'ACTION',
		'url': 'action.html'
	  },
	  {
		'title': 'ANIMATION',
		'url': 'animation.html'
	  },
	  {
		'title': 'CONTACTS',
		'url': 'contacts.html'
	  },
  ];
  
  $(function() {    // generating navbar elements
	var navbarElementsHtml = '';
	// start loop from 0
	for (var i = 0; i<navbarElements.length; i++) {
	  navbarElementsHtml += '<li class="nav-item">'+
	  '<a class="transition" href="'+navbarElements[i].url+'">'+navbarElements[i].title+'</a>'
	  +'</li>';
	} //adding id
	$('#navbar').find('ul').html(navbarElementsHtml);
	// $('#navbar').html(header);  //checking
  });




// music player
var music = document.getElementById("music");    // I learned it"how to create a music player in js" from several youtube tutorials
var playButton = document.getElementById("play"); //https://www.youtube.com/watch?v=qbhJm8LAAlY
var pauseButton = document.getElementById("pause"); //https://www.youtube.com/watch?v=t0Qp3McD3j0
var playhead = document.getElementById("elapsed"); // https://www.youtube.com/watch?v=iu4X2PNUH9A
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer"); // elements
var duration;
pauseButton.style.visibility = "hidden"; // when playbutton is shown pausebutton is hidden

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false); // elapse time (slider)

function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px"; // how it counts
}

playButton.onclick = function() {
	music.play();
	playButton.style.visibility = "hidden"; //pausebutton is visible when music plays (playbutton is hidden)
	pause.style.visibility = "visible";
}

pauseButton.onclick = function() {
	music.pause();							//pausebutton is hidden when music pauses (playbutton is visible)
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}

music.addEventListener("canplaythrough", function () {
	duration = music.duration;                            //duration
}, false);



//slide 
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000); //time transition

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;  // transition will be x+1 
    slides[currentSlide].className = 'slide showing';
}



// fadeIn and fadeOut-transfer from one page to another will be smooth  
$(document).ready(function() {

    $("body").css("display", "none"); //fading

   $("body").fadeIn(1000); // time 
    

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage); //time
	});

	function redirectPage() {
		window.location = linkLocation;
    }  

});


// table toggle show & hide
$('.Show').click(function() {
    $('#target').show(1000);     //time appearance
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target').hide(1000);     //time disappearance
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {       // click button (function)
    $('#target').toggle('slow');
});

