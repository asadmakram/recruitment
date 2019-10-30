const Candidate = require('../../entities/Candidate');

exports.handler = async (event, context, callback) => {

  let body = JSON.parse(event.body);

  let candidate = await getCandidate(body.emailAddress);

  var errorMsg = validateChange(candidate, body);
  if (errorMsg) {
    return sendRes(400, errorMsg);
  }

  await updateCandidate(body);
  return sendRes(200,'Successfully updated student');
};

function validateChange(candidate, body){
  let errorMsg = "";
  if (candidate.emailAddress != body.emailAddress){

    errorMsg = "Email address field cannot be changed."

  }

  return errorMsg;
}

async function updateCandidate (params) {

  console.log('updating a candidate');

  console.log(params);
  await Candidate.update(params);
  console.log('Candidate successfully updated');
}

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    body: JSON.stringify(body)
  };
  return response;
};