const { listItems } = require("../../dynamodb/operations.js")
const { response } = require("../../utils/response.js")

exports.getItems=async(event)=>{
    try {
        const items=await listItems();
        return response(200,items,null)
    } catch (error) {
        return response(400,{},error.message)
    }
}