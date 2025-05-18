const {dbClient}=require("./connection.js");
const { PutItemCommand , ScanCommand,CreateTableCommand, AttributeValue}=require("@aws-sdk/client-dynamodb");
/**
 * 
 * @param {{name:string,email:string}} item
 */
exports.createItem=async(item)=>{
    try {
        const putItemCommand=new PutItemCommand({
            TableName: "ItemsTable-dev",
            Item:  {
                id:{
                    S:Date.now().toString()
                },
                name:{
                    S:item.name
                },
                email:{
                    S:item.name
                }
            },
        })
        await dbClient.send(putItemCommand);
    } catch (error) {
        throw new Error(error.message);
    }

}

exports.listItems=async()=>{
    try {
        const itemsCommand=new ScanCommand({
            TableName: 'ItemsTable-dev',
            Limit:10,
            ConsistentRead:true
        });
        const res=await dbClient.send(itemsCommand);
        return res.Items;
    } catch (error) {
        console.log(error.message);
    }
}

exports.createTable=async()=>{
    const createTableCommand=new CreateTableCommand({
        TableName:"ItemsTable-dev",
        AttributeDefinitions:[{
            AttributeName:"id",
            AttributeType:"S"
        }],
        KeySchema:[
            {
                KeyType: "HASH",
                AttributeName:"id"
            }
        ],
        BillingMode:"PAY_PER_REQUEST"
    })
    await dbClient.send(createTableCommand);
}