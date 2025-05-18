const {response} =require("../../utils/response.js");
const {createItem} =require("../../dynamodb/operations.js");
exports.createItem=async(event)=>{
    try {
      const body=JSON.parse(event.body||"{}");
      const {name,email}=body;
      if(!name||!email) return response(400,{},"pass all required fields");
      await createItem({name,email});
      return response(201,{name,email},null);
    } catch (error) {
      return response(400,{},error.message);
    }
}
  