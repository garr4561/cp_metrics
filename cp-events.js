$(document).ready(function() {

	console.log("Events loaded_v1");

	    		window.parent.cpAPIEventEmitter.addEventListener("CPAPI_QUESTIONSUBMIT", function(evt)
			{
				var slideID = $('[id^=Slide]').attr("id");
				console.log("Slide ID: " + slideID);
				
				// var quizObject = window.parent.cp.getQuestionObject(slideID);

				// var question_text = quizObject.questionData.qt;

				// var q_status = evt.Data.questionAnsweredCorrectly;
				// var q_num = evt.Data.questionNumber + 1;

				// var question_obj = {
				// 	"slideID" : slideID,
				// 	"questionNumber" : q_num,
				// 	"questionText" : question_text,
				// 	"answeredCorrectly" : q_status
				// };

				// customA_Array.push(question_obj);

			});
});
