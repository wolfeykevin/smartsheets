import admin from "../config/firebase_config.js"
import {getAuth} from "firebase-admin/auth"

const decodedToken = (req, res, next) => {
  const auth = req.headers.authorization
  
  if (!auth) {
    res.send("no Auth -> you don't have a header")
    return
  }

  const idToken = auth.split(" ")[1];

  getAuth(admin)
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      // console.log(decodedToken)
      if(decodedToken) {
        req.user = decodedToken
        return next()
      }
      res.send("Unauthorized -> Token provided isn't ours")
    })
    .catch((e) => {
      res.send({head : `This is the token i have ${idToken}\n=====`, ErrorMessage:e})
    });
}


export default decodedToken

