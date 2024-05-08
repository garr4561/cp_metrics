$(document).ready(function() {

	console.log("Script loaded");

	var studentNameInput = window.parent.cpAPIInterface.getVariableValue("cpQuizInfoStudentName");

            var courseName = window.parent.cpAPIInterface.getVariableValue("cpInfoProjectName");
            var today = window.parent.cpAPIInterface.getVariableValue('cpInfoCurrentDateString');
            var time = window.parent.cpAPIInterface.getVariableValue('cpInfoCurrentTime');
            var score = window.parent.cpAPIInterface.getVariableValue('cpInfoPercentage');
            var attempts = window.parent.cpAPIInterface.getVariableValue('cpQuizInfoAttempts');
            var date_and_time = today + "_" + time

            var question_answers = {};

            var ak = window.parent.cpAPIInterface.getVariableValue('ak');
            var sk = window.parent.cpAPIInterface.getVariableValue('sk');

            var temp_array = window.parent.customA_Array;

            var dynamodb = new AWS.DynamoDB({region: 'us-east-2', credentials: {
                accessKeyId: ak, 
                secretAccessKey: sk
            }});

            for (let f = 0; f < temp_array.length; f++){
                  var temp_q_num = temp_array[f].questionNumber.toString();
                  var temp_question_text = temp_array[f].questionText;
                  var temp_answered = temp_array[f].answeredCorrectly.toString();

                  question_answers[f] = {"M": {"QuestionNumber": {"S": temp_q_num}, "QuestionText": {"S":temp_question_text}, "AnsweredCorrectly": {"S": temp_answered}}};
                }

            var params = {
                TableName: "cp_test_3",
                Item: {
                "test_name": {
                   S: courseName
                  }, 
                "dateTime": {
                  S: date_and_time
                },
                  "student_name": {
                    S: studentNameInput
                  },
                  "quiz_total_score": {
                    S: score.toString()
                  },
                  "number_of_attempts": {
                    S: attempts.toString()
                  },
                 "question_results": {
                   M: question_answers
                 },
                 "test_date": {
                 	S: today
                 } 
               }
             }

             console.log("Current Date: " + date_and_time)

            dynamodb.putItem(params, function(err, data) {
                 if (err) console.log(err, err.stack); 
                 else     console.log(data);           
            });

});
