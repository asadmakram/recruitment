var AWS = require('aws-sdk');
var DynamoClient = new AWS.DynamoDB.DocumentClient();
//const {promisify} = require('util');

class DBWrapper{

    static async Add(params) {

        return new Promise((resolve, reject)=>{

            DynamoClient.put(params, function (err, res){

                if (err){
                    reject(err);
                } else{   
                    resolve(res);
                }
            })
        });
    }
}


module.exports = DBWrapper;