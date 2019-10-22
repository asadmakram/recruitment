const Candidate = require('../../entities/Candidate');

exports.handler = async (event, context, callback) => {

  let body = JSON.parse(event.body)
    await createCandidate(body);
    return sendRes(200,'Successfully created student');
};

async function createCandidate (event) {

  console.log('creating a candidate');

  console.log(event);
  await Candidate.create(event);
  console.log('Candidate successfully created');
}

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    body: JSON.stringify(body)
  };
  return response;
};