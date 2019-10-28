const DBWrapper = require('../common/DBWrapper');

class Candidate
{
    constructor (params){
        this.Id = params.Id;
        this.name = params.name;
        this.employmentStatus = params.employmentStatus;
        this.employerName = params.employerName;
        this.emailAddress = params.emailAddress;
        this.contactNumber = params.contactNumber;
    }

    static async create(candidate) {

        const params = {
            TableName : process.env.CANDIDATE_TABLE,
            Item: {
                name: candidate.name,
                employerName: candidate.employerName,
                currentEmployer : candidate.currentEmployer,
                designation: candidate.designation,
                emailAddress : candidate.emailAddress,
                contactNumber: candidate.contactNumber,
                highestEducation: candidate.highestEducation||[],
                education: candidate.education,
                skills: candidate.skills || [],
                experience: candidate.experience || []
            }
        }

        console.log('adding in dynamo')
        return await DBWrapper.Add(params)
    }

    static async update(candidate) {

        const params = {
            TableName : process.env.CANDIDATE_TABLE,
            Item: {
                name: candidate.name,
                employerName: candidate.employerName,
                currentEmployer : candidate.currentEmployer,
                designation: candidate.designation,
                emailAddress : candidate.emailAddress,
                contactNumber: candidate.contactNumber,
                highestEducation: candidate.highestEducation||[],
                education: candidate.education,
                skills: candidate.skills || [],
                experience: candidate.experience || []
            }
        }

        console.log('updating candidate information in dynamo')
        return await DBWrapper.Update(params)
    }

    static async get(emailAddress){

        let params = {
            TableName: process.env.CANDIDATE_TABLE,
            Key: {
                "emailAddress": emailAddress
            }
        };

        var result =  await DBWrapper.Get(params);

        return result ? result.Item : null;
    }
}

module.exports = Candidate;