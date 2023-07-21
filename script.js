//your JS code here. If required.
// Create a new <div> element
let div = document.createElement("div");

// Set the 'id' attribute of the <div> to 'browser-info'
div.id = 'browser-info';

// Append the <div> to the <body> of the current document
document.body.append(div);

// Set the innerHTML of the <div> to display browser information
div.innerHTML = "You are using " + navigator.appName + " version " + navigator.appVersion;
