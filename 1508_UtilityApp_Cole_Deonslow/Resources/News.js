var entWindow = function(){
	
	//declare a variable for the create the news screen.
	var newsWindow = Ti.UI.createWindow({
		backgroundColor: "#FFDC96",
		title: "Your Entertainment News",
		exitOnClose: true,
  		fullscreen: false
		});
		
	navWindow.openWindow(newsWindow);
	

	
	//declare a variables for the first news views & images. Add them to the labels to the views
	var headView = Ti.UI.createView({
		top: 10,
		backgroundColor: "#FFDC96"
	});
	
	var headImage = Ti.UI.createImageView({
		top: headView.top + 10,
		image: "lucy.jpg",
		width: 200,
		Height: 200
	});
	
	var headViewInfo = Ti.UI.createView({
		top: headImage.top + headImage.height + 10,
		left: 10,
		right: 10,
		width: "auto",
		height: "auto"
	});

	var headText = Ti.UI.createLabel({
		text: "Lucy Liu's a Mom!!! \nThe actress’s rep confirmed to PEOPLE the birth of a son via surrogate. 'Lucy Liu is the proud mother of Rockwell Lloyd Liu, brought into the world via gestational carrier. Mom and baby are healthy and happy.' The actress, 46, shared a photo of her son via Instagram on Thursday, with the caption, 'Introducing the new little man in my life, my son Rockwell Lloyd Liu. In [love]!'",
		font:{fontFamily: "Avenir Next Condensed", fontSize: 14},
		textAlign: "center"	
	});
	
	headViewInfo.add(headText);
	headView.add(headImage, headViewInfo);
	
	var secondView = Ti.UI.createView({
		top: 10,
		backgroundColor: "#FFDC96"
	});
	
	var secondImage = Ti.UI.createImageView({
		top: secondView.top + 10,
		image: "puppys.jpg",
		width: 200,
		Height: 200
	});
	
	var secondViewInfo = Ti.UI.createView({
		top: secondImage.top + secondImage.height + 10,
		left: 10,
		right: 10,
		width: "auto",
		height: "auto"
	});

	var secondText = Ti.UI.createLabel({
		text: "Your Dog or Your Mate? \nNothing comes between dog lovers and their beloved companions. According to a new survey, many Americans would choose their pet over their partner.  The survey of nearly 1,000 dog owners finds that 38 percent love their dog more than their partner or spouse. Dog owners even admit that they'd be slightly more devastated by their pet running away than a breakup, according to the survey performed for PoochPerks.com, a pet subscription box service. On a scale of 1 to 10, with 10 being completely devastated, a runaway dog averages a 9.1 versus 8.8 for a breakup.",
		font:{fontFamily: "Avenir Next Condensed", fontSize: 14},
		textAlign: "center"	
	});
	
	secondViewInfo.add(secondText);
	secondView.add(secondImage, secondViewInfo);
	
	var thirdView = Ti.UI.createView({
		top: 10,
		backgroundColor: "#FFDC96"
	});
	
	var thirdImage = Ti.UI.createImageView({
		top: thirdView.top + 10,
		image: "obama.jpg",
		width: 200,
		Height: 200
	});
	
	var thirdViewInfo = Ti.UI.createView({
		top: thirdImage.top + thirdImage.height + 10,
		left: 10,
		right: 10,
		width: "auto",
		height: "auto"
	});

	var thirdText = Ti.UI.createLabel({
		text: "Following their European tour with First Lady Michelle Obama earlier this summer, the first daughters are bringing their chic sense of style to the streets of NYC for a father-daughter weekend with the President. Since moving into The White House seven years ago, Sasha and Malia Obama's style has transformed along the way. Click through for a look back at the teenagers' best fashion moments over the years.",
		font:{fontFamily: "Avenir Next Condensed", fontSize: 14},
		textAlign: "center"	
	});
	
	thirdViewInfo.add(thirdText);
	thirdView.add(thirdImage, thirdViewInfo);
	

//add the views to the scrollable view
var scrollableView = Ti.UI.createScrollableView({
  views:[headView,secondView,thirdView],
  showPagingControl:true
});
	
	//add the scrollview to the window and openthe navigation window
	newsWindow.add(scrollableView);
	navWindow.open();
};

signBox.addEventListener("click", entWindow);

