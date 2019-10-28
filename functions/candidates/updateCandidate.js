const Candidate = require('../../entities/Candidate');

exports.handler = async (event, context, callback) => {

  let body = JSON.parse(event.body)
    await updateCandidate(body);
    return sendRes(200,'Successfully updated student');
};

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