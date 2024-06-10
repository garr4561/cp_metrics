$(document).ready(function() {

	window.parent.cpAPIEventEmitter.addEventListener("CPAPI_QUESTIONSUBMIT", function(evt)
{
	alert("question answered");

});

});
