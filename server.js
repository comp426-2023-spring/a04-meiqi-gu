import minimist from "minimist";
import express from "express"; 
import {rps, rpsls} from "../lib/rpsls.js";

var app = express(); 

const args = minimist(process.argv.slice(2)); 
const port = args.port || args.p || process.env.PORT || 5000; 

// Check endpoint at /app/
app.get("/app/", (req, res, next) => {
    res.status(200).end('200 OK'); 
}); 

// Default API endpoint
app.use(function(req, res) {
    const statusCode = 404; 
    const statusMsg = 'NOT FOUND'; 
    res.status(statusCode).end(statusCode+' '+statusMsg); 
}); 



const server = app.listen(port, () => {
    console.log("Working.")
}); 

