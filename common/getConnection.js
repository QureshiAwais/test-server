var mongodb=require('mongodb')
var getDBConn=async()=>{
    try{
        var mongoClient=mongodb.MongoClient;
        var server=await mongoClient.connect(process.env.DB_URL)
        var db=server.db("onlinetest")
        return db;
    }catch(ex){
        console.log(ex)
        return null
    }
}
module.exports={
    getDBConn
}