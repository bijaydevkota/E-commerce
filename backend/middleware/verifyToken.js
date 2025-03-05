import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
  //1. Get the token from the header
  const authHeader = req.headers["authorization"];
  console.log(authHeader, "This is auth header");

  const pureToken = authHeader.split(" ")[1];
  console.log(pureToken, "This is pure token");

  if(!pureToken){
    return res.status(401).json({
        messege : "Token not found"
    })
  }

  //2.Check if token is valid or not
  jwt.verify(pureToken, 'this_is_private_key', function(err, decoded) {
    if(err){
        return res.status(401).json({
            messege: "Token invalid"
        })
    }
    console.log(decoded, "This is decoded")
    next();
  });

  //3. If token is valid then proceed forward else block the request

};
