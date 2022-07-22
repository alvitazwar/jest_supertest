require('dotenv').config()      // Import the dotenv config
const request = require("supertest"); //Initialize the Supertest

const defaultHeader = request.agent(process.env.URL) //This will Process the Url from env
//.set("Authorization",process.env.TOKEN)              //This will Process the TOKEN from env
module.exports= defaultHeader;
