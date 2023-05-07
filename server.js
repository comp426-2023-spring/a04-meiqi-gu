import minimist from "minimist";
import express from "express"; 
import fs from "fs"; 

var app = express(); 

const args = minimist(process.argv.slice(2)); 
const port = args.port || args.p || process.env.PORT || 5000; 

// Default API endpoint
app.use(function(req, res) {
    const statusCode = 404; 
    const statusMsg = 'NOT FOUND'; 
    res.status(statusCode).end(statusCode+' '+statusMsg); 
}); 

const server = app.listen(port, () => {
    console.log("Working.")
}); 

