const Candiate = require('../../entities/Candidate');

exports.handler = async (event) => {

    var candidates = await getCandidateRecords(event);

    return sendResponse(200, candidates);
}

var getCandidateRecords = async (params) =>{
    console.log(params);
    let emailAddress = params.pathParameters.emailAddress;

    console.log(`Request recieved to get the user bearing email address '${emailAddress}'.`)

    var candidate = await Candiate.get(emailAddress);
    console.log('candidate : ', candidate);

    return candidate;
}

var sendResponse = (code, lstCandidates) => {


    var res = {
        statusCode: code,
        body : lstCandidates
    };

    console.log('sending response: ', res);

    return res;
}