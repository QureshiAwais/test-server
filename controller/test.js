var express=require('express')
var router=express.Router()
var jwt=require("jsonwebtoken")
const {getQueService}=require('../service/testService')
const validateToken = require('../common/validateToken')
router.get('/get-que',
validateToken,
async(req,res)=>{
    const result=await getQueService()
    res.send(result)
})
module.exports=router;