// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

//declare a variable for the home screen to begin.
var homeWindow = Ti.UI.createWindow({
	backgroundColor: "#FFDC96",
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
		window: homeWindow
});

//declare a variable for the view to hold the image for the home screen.
var logoBox = Ti.UI.createView({
	height: 200,
	width: 300,
	//borderColor: "#000",
	top:0
});

//declare a variable for the image for the home screen.
var logoPic = Ti.UI.createImageView({
	image: "thescoop.png",
});

//declare a variable for a view to tell user to sign in
var signButton = Ti.UI.createView({
	top: logoBox.top + logoBox.height + 10,
	height: 70,
	width: 300
});

//declare a variable for a label for the text to instruct theuser to sign in.
var signText = Ti.UI.createLabel({
	text: "Sign In \n For Your Entertianment News",
	textAlign: "center",
	font:{fontFamily: "Avenir Next Condensed", fontSize: 20, fontSytle: "Italic"}
});

//declare a variable for the text field for the user to enter their user name.
var userField = Titanium.UI.createTextField({
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'User Name',
    keyboardToolbarColor : '#999',
    keyboardToolbarHeight : 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    top : signButton.top + signButton.height + 10,
    width : 300, 
    height : 35,
    
});


//declare a variable for the text field for the user to enter their user name.
var passField = Titanium.UI.createTextField({
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Password',
    passwordMask: true,
    keyboardToolbarColor : '#999',
    keyboardToolbarHeight : 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    top : userField.top + userField.height + 5,
    width : 300, 
    height : 35,
});


//declare a variable for a view for user to click and sign in
var signBox = Ti.UI.createView({
	top: passField.top + passField.height + 20,
	backgroundColor: "#0084C4",
	height: 50,
	width: 100,
	borderRadius: 10,
	viewShadowColor: "#000",
	viewShadowOffset:(-10,0),
	backgroundGradient: {
		type: "linear",
		startPoint: { x: 0, y: 25 },
        endPoint: { x: 0, y: 100 },
        colors: [{ color: "#0084C4", offset: 0.0}, {color: "#006393", offset: 0.25}],
    }
});

//declare a variable for a label for the text to instruct the user to sign in.
var signIn = Ti.UI.createLabel({
	text: "Sign In",
	color: "#fff",
	font:{fontFamily: "Avenir Next Condensed", fontSize: 30, fontSytle: "Italic"}
});

//declare a variable for a view to hold instructions for creating an account.
var actBox = Ti.UI.createView({
	top: signBox.top + signBox.height + 100,
	backgroundColor: "#d8617d",
	opacity: .5,
	height: 50,
	width: 150,
	borderRadius: 10,
	viewShadowColor: "#392529",
	viewShadowOffset:(-10,0),
});

//declare a variable to hold the text to instruct the user to create an account
var actText = Ti.UI.createLabel({
	text:"Not a member? \n Create an Account",
	color:"#000",
	textAlign:"center",
	font:{fontFamily: "Avenir Next Condensed", fontSize: 14, fontSytle: "Italic"},
});


//declare variable to require the js pages
var createAct = require("Account");
var entNews = require("News");


//add the labels to the views, add all of the views to the home screen window and open the home screen window.
logoBox.add(logoPic);
signButton.add(signText);
signBox.add(signIn);
actBox.add(actText);
homeWindow.add(logoBox, signButton, userField, passField, signBox, actBox);
navWindow.open();