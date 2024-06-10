$(document).ready(function() {
	console.log("External loaded");
	
	window.parent.cpAPIEventEmitter.addEventListener("CPAPI_QUESTIONSUBMIT", function(evt)
{
	alert("question answered");

});

});
