import minimist from "minimist";
import express from "express"; 
import {rps, rpsls} from "./lib/rpsls.js";

var app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

const args = minimist(process.argv.slice(2)); 
const port = args.port || args.p || process.env.PORT || 5000; 

// Check endpoint at /app/
app.get("/app/", (req, res, next) => {
    res.status(200).end('200 OK'); 
}); 

// Endpoint for RPS & RPSLS with no input. 
app.get('/app/rps/', (req, res) => {
    const play = rps(); 
    res.status(200).send(play); 
}); 

app.get('/app/rpsls/', (req, res) => {
    const play = rpsls(); 
    res.status(200).send(play); 
}); 

app.get('/app/rps/play/', (req, res) => {
    const input = req.query.shot; 
    console.log(input); 
    const play = rps(input); 
    console.log(play); 
    res.status(200).send(play); 
}); 

app.post('/app/rps/play/', (req, res) => {
    const input = req.body.short;
    console.log(input); 
    const play = rpsls(input); 
    console.log(play); 
    res.send(play); 
    res.end(); 
})



// Endpoint /app/___/play/options/
app.get('/app/rps/play/:input/', (req, res) => {
    const play = rps(req.params.input); 
    res.status(200).send(play); 
});

app.get('/app/rpsls/play/:input/', (req, res) => {
    const play = rpsls(req.params.input); 
    res.status(200).send(play); 
})

// Default API endpoint
app.use(function(req, res) {
    const statusCode = 404; 
    const statusMsg = 'NOT FOUND'; 
    res.status(statusCode).end(statusCode+' '+statusMsg); 
}); 



const server = app.listen(port, () => {
    console.log("Working.")
}); 

