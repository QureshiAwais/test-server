const {getQueDao}=require('../dao/testDao')
const getQueService=async()=>{
    const result=await getQueDao();
    return result
}
module.exports={
    getQueService,
}