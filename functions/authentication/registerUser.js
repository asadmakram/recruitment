var AWS = require('aws-sdk');

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    let body = JSON.parse(event.body);

    var params = {
        ClientId: '51t8rqg34mikclgk567evo22h6', /* required */
        Password: body.Password,
        Username: body.Username,

    }

    var response = await handleCognitoCall(params);
    response = await handleAdminConfirmSignup(params);

    return sendResponse(200, candidates);
}
function handleCognitoCall(params) {

    return new Promise((resolve, reject) => {

        cognitoidentityserviceprovider.signUp(params, (err, res) => {

            if (err) {
                return reject(err);
            }

            return resolve(res);
        });

    });
}

function handleAdminConfirmSignup(userInfo) {
    var params = {
        UserPoolId: 'us-east-1_OXYvvtoC5', /* required */
        Username: userInfo.Username, /* required */
    };
    cognitoidentityserviceprovider.adminConfirmSignUp(params, function (err, data) {
        if (err) {
            return reject(err);
        }

        return resolve(res);
    });
}


var sendResponse = (code, lstCandidates) => {


    var res = {
        statusCode: code,
        body : lstCandidates
    };

    console.log('sending response: ', res);

    return res;
}