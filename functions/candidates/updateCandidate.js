const Candidate = require('../../entities/Candidate');

exports.handler = async (event, context, callback) => {

  let candidateRequest = JSON.parse(event.body);

  let candidate = await getCandidate(candidateRequest.emailAddress);

  var errorMsg = validateChange(candidate, candidateRequest);
  if (errorMsg) {
    return sendRes(400, errorMsg);
  }

  await updateCandidate(candidateRequest, candidate);
  return sendRes(200,'Successfully updated student');
};

function validateChange(candidate, candidateRequest){
  let errorMsg = "";
  if (candidate.emailAddress != candidateRequest.emailAddress){
    errorMsg = "Email address field cannot be changed."
  }

  return errorMsg;
}


async function getCandidate (emailAddress) {

  console.log('getting existing record of a candidate');
  console.log(emailAddress);
  let candidate = await Candidate.get(emailAddress);
  console.log('Candidate successfully found');

  return candidate;
}


async function updateCandidate (candidate, existingCandidate) {

  console.log('updating a candidate');
  // console.log(params);
  await Candidate.update(params, existingCandidate);
  console.log('Candidate successfully updated');
}

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    body: JSON.stringify(body)
  };
  return response;
};