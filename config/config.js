const dotenv = require('dotenv').config({path:"./config/config.env"});
module.exports ={
    "MODE":process.env.MODE,
    "PORT": process.env.PORT,
    "DB_URL": process.env.DB_URL,
    "AccessKeyID": process.env.AccessKeyID,
    "SecretAccessKey":process.env.SecretAccessKey,
    "region": process.env.region,
    "BUCKET":process.env.BUCKET
}