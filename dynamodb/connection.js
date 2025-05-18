const { DynamoDBClient }=require("@aws-sdk/client-dynamodb");

const dbClient=new DynamoDBClient({
    region: "ap-south-1",
    endpoint: 'http://localhost:8000',
    credentials:{
        accessKeyId:"localkey123",
        secretAccessKey:"localsecret123"
    }
})

exports.dbClient=dbClient;
