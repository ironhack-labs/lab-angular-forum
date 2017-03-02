function isAuthenticated(req, res, next){
  if (!req.isAuthenticated()){
     return res.status(403).json(new Error("Not Authorized"))
  }
  return next();
}

module.exports = isAuthenticated;
