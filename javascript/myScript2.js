


	var imagePicData = new Array(6);
	var locationData = new Array(6);
	var captionData = new Array(6);

	//we are going to make an event listener...
	var fButtonListener;
	var bButtonListener;


	var whichPic;

	//This is pic data
	imagePicData[0] = "images/p0.png";  // me & Mr. Bakon
	imagePicData[1] = "images/p1.jpg";
	imagePicData[2] = "images/p2.jpg";
	imagePicData[3] = "images/p3.jpg";
	imagePicData[4] = "images/p4.jpg";
	imagePicData[5] = "images/p5.jpg";

	//This is says where the picture was taken
	locationData[0] = "Location: Southborough, MA";
	locationData[1] = "Location: Ocoee, FL";
	locationData[2] = "Location: Ocoee, FL";
	locationData[3] = "Location: Ocoee, FL";
	locationData[4] = "Durham, NC";
	locationData[5] = "Someplace in the South";

	//These are captions for the pictures
	captionData[0] = "\"Me and Mr. Bakon yukking it up\"";
	captionData[1] = "\"Beautiful sunrise in Florida\"";
	captionData[2] = "\"We go between lakes you have to watch out for other boats\"";
	captionData[3] = "\"All four are ready to row!\"";
	captionData[4] = "\"A visit to Duke and UNC\"";
	captionData[5] = "\"Crazy haircut place in Durham, NC\"";




window.onload = function() {

	whichPic = 0;  // go to the first pic
	
	document.getElementById("picImgBox").src = imagePicData[whichPic];

    //This is now just to check -- you can turn this off
	//alert("hi There, which pic is " + whichPic);

	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");


	fButtonListener.addEventListener('click', function(event) {
			
			++whichPic;
			if(whichPic >= imagePicData.length ){
				whichPic = 0;
			}
			document.getElementById("locationStation").innerHTML = locationData[whichPic];
			document.getElementById("picImgBox").src = imagePicData[whichPic];
			document.getElementById("captionLoc").innerHTML = captionData[whichPic];
	});

	bButtonListener.addEventListener('click', function(event) {
			whichPic=whichPic-1;
			if(whichPic < 0){
				whichPic = imagePicData.length - 1;
			}
			document.getElementById("locationStation").innerHTML = locationData[whichPic];
			document.getElementById("picImgBox").src = imagePicData[whichPic];
			document.getElementById("captionLoc").innerHTML = captionData[whichPic];
	});


};