const jwt=require("jsonwebtoken")
function validateToken(req,res,next){
  const token=req.headers.authorization;
   if(token){
      jwt.verify(token,"my-token",(e,s)=>{
          if(e){
             res.send("Invalid token")
           }else{
              next()
           }
       })
   }else{
    res.send("token missing")
   }
 }
    module.exports=validateToken
