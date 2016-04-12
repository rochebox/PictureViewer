//this is my javascript file

var imagePicData= new Array(6);
var imageLocData= new Array(6);
var imageCaptionData = new Array(6);
var whichPic;

var forwardButtonListener;
var backButtonListener;

window.onload = function() {
  //alert("hi");

  whichPic = 0;  //This keeps count to 0-5


  //var picName ="../images/p1.jpg";

  //var element = document.getElementById("pW");
  //element.src="../images/p1.jpg";
  
  //document.getElementById("imageid").src="../template/save.png";

imagePicData[0] = "images/p0.png";
imagePicData[1] = "images/p1.jpg";
imagePicData[2] = "images/p2.jpg";
imagePicData[3] = "images/p3.jpg";
imagePicData[4] = "images/p4.jpg";
imagePicData[5] = "images/p5.jpg";

imageLocData[0] = "Location: Southborough, MA";
imageLocData[1] = "Location: Ocoee, FL";
imageLocData[2] = "Location: Ocoee, FL";
imageLocData[3] = "Location: Ocoee, FL";
imageLocData[4] = "Location: Durham, NC";
imageLocData[5] = "Location: Durham, NC";

imageCaptionData[0] = "Mr. Roche and Mr. Bakon think spring break is great!";
imageCaptionData[1] = "STM Crew gets ready for a 6AM row in Ocoee";
imageCaptionData[2] = "Going between lakes you have to pay attention to the signs" ;
imageCaptionData[3] = "STM Varsity getting ready to row in FLA";
imageCaptionData[4] = "My Daughter Lily loves Duke and UNC basketball";
imageCaptionData[5] = "Haircuts in Durham, NC";


window.document.getElementById("picView").src();



setPicData();


//get a reference for the Listeners
fButtonListener = document.getElementById("forwardButton");
bButtonListener = document.getElementById("backButton");

 //add event listeners
 fButtonListener.addEventListener('click', function(event) {
 	whichPic++;
 	if(whichPic >= imagePicData.length){
 		whichPic = 0;
 	}
 	setPicData();
  });


  bButtonListener.addEventListener('click', function(event) {
 	whichPic--;
 	if(whichPic < 0){
 		whichPic = (imagePicData.length-1);
 	}
 	setPicData();
  });



};

function setPicData(){
	document.getElementById("picImgBox").src = imagePicData[whichPic];
	document.getElementById("locationStation").innerHTML = imageLocData[whichPic];
	document.getElementById("captionLoc").innerHTML = imageCaptionData[whichPic];
}


