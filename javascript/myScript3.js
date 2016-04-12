


	var imagePicData = new Array(6);
	var whichPic;
	//..declare arrays for caption and location

	imagePicData[0] = "images/p0.png";
	imagePicData[1] = "images/p1.jpg";
	imagePicData[2] = "images/p2.jpg";
	imagePicData[3] = "images/p3.jpg";
	imagePicData[4] = "images/p4.jpg";
	imagePicData[5] = "images/p5.jpg";

	//populate the arrays
	//list of captions...
	//list of locations...

	var fButtonListener;
	var bButtonListener;



window.onload = function() {

	whichPic = 0;  // go to the first pic
	
	document.getElementById("picImgBox").src = imagePicData[whichPic];

	//get a reference for the Listeners
	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");

    //This is now just to check -- you can turn this off
	alert("hi There, which pic is " + whichPic);

	//add event listeners
 	fButtonListener.addEventListener('click', function(event) {
 		alert("Don't poke me");
 		movePicsForward();
  	});

 	bButtonListener.addEventListener('click', function(event) {
 		alert("Don't poke me either");
 		movePicsBackward();
  	});
};

function movePicsForward(){
	++whichPic;
	if(whichPic >= imagePicData.length){
		whichPic = 0;
	}
	document.getElementById("picImgBox").src = imagePicData[whichPic];

}