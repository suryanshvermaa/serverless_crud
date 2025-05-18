/**
 * 
 * @param {number} statusCode 
 * @param {object} data 
 * @param {string} error 
 * @returns {{statuseCode:number ,data:object,error:string}}
 */
exports.response=(statusCode,data,error)=>{
    return {
        statusCode,
        body:JSON.stringify({data,error})
    }
}