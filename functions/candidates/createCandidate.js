const Candidate = require('../../entities/Candidate');

exports.handler = async (event, context, callback) => {

    await createCandidate(event);
    return sendRes(200,'Hello');
};

async function createCandidate (event) {

  console.log('creating a candidate');
  await Candidate.create(event);
  console.log('Candidate successfully created');
}

const sendRes = (status, body) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "text/html"
    },
    body: body
  };
  return response;
};

//module.exports = handler;