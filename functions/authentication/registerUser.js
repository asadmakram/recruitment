var AWS = require('aws-sdk');

var Cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {

   // Cognito.signUp()

    var candidates = await getCandidateRecords(event);

    return sendResponse(200, candidates);
}