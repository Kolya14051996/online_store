const jwt = require('jsonwebtoken')
const {fn} = require("sequelize");

module.exports = function(role) {
    return function (req, res, next){
        if(req.method === "OPRIONS"){
            next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1]
            if(!token) {
                return res.status(401).json({messege: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role){
                return res.status(403).json({messege: "Net Dostupa"})
            }
            req.user = decoded
            next()
        }catch (e){
            res.status(401).json({messege: "Не авторизован"})
        }
    }
}




    fn('ADMIN')





