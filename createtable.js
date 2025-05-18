
const {createTable}=require("./dynamodb/operations.js");

createTable().then(()=>{
    console.log("Table created");
}).catch((err)=>{
    console.log("Error in creating table:",err.message)
})