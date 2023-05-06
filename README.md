# a04 Stand up an API

This assignment will help you stand up a web API using Express and the module that you produced for a03.

Make sure to consult the appropriate documentation as you work through the assignment instructions.

## DO NOT CLONE THIS TEMPLATE REPOSITORY DIRECTLY

Use the GitHub classroom link instead: https://classroom.github.com/a/-NaU1Ost

If you clone the template repo directly, it will not be added to the organization as an individual repo associated with your account and you will not be able to push to it. This repository should only be used for assignment issues.

## Instructions

In this assignment, you are going to wrap your rock-paper-scissors functions in API endpoints using Express.js.

This should be very straightforward.

The instructions for this are fairly sparse because I want you to be creative in how you approach this.
There are a only a few things that you will have to do very specifically in order to make this work, but beyond that, HOW you do this is really up to you. 

> Beware the regular expressions (regex) below.
> 
> `{"player":"(rock|paper|scissors)"}` means `{"player":"rock"}` or `{"player":"paper"}` or `{"player":"scissors"}`.

### Requirements

#### Structural requirements

1. Import your RPS and RPSLS modules from a03.
2. Use your modules as controllers for the endpoints listed below.

#### Operational requirements

1. `server.js` file that takes an arbitrary port number as a command line argument (i.e. I should be able to run it with `node server.js --port=$PORTNUMBER`). The port should default to 5000 if no argument is given.
2. Default API endpoint that returns `404 NOT FOUND` for any endpoints that are not defined.
3. Check endpoint at `/app/` that returns `200 OK`.
4. Endpoint `/app/rps/` that returns `{"player":"(rock|paper|scissors)"}`. (HINT: regex)
5. Endpoint `/app/rpsls/` that returns `{"player":"(rock|paper|scissors|lizard|spock)"}`.
6. Endpoint `/app/rps/play/` should accept request bodies in the following forms: `shot=(rock|paper|scissors)` (URLEncoded) or `{"shot":"(rock|paper|scissors)"}` (JSON) as data bodies and return `{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}`.
7. Endpoint `/app/rpsls/play/` should accept request bodies in the following forms: `shot=(rock|paper|scissors)` (URLEncoded) or `{"shot":"(rock|paper|scissors)"}` (JSON) and return `{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}`.
8. Endpoint `/app/rpsls/play/(rock|paper|scissors)/` should return `{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}`.
9. Endpoint `/app/rpsls/play/(rock|paper|scissors|lizard|spock)/` should return `{"player":"(rock|paper|scissors|lizard|spock)","opponent":"(rock|paper|scissors|lizard|spock)","result":"(win|lose|tie)"}`.
10. ALL endpoints should return HTTP headers including a status code and the appropriate content type for the response.
11. All of this should be in a Node package with `"main"` set to `server.js`.
12. The test script defined in `package.json` should be set to `"node server.js --port=5555"`

### Prerequisites

1. Run `npm init`.
2. Install all dependencies.
3. Create a `server.js` file.
4. Place your a03 module in a subdirectory named `lib` and make sure that it is imported in `server.js`.

### Testing your server

Run the following bash one-liners to test your API server. These are included in the autograder for this assignment. Your cod should produce the outputs listed above for the corresponding script below.

These should help you to better understand how to use curl to make API calls.

#### Get the root endpoint of your app

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s http://localhost:${PORT}/app/ && sleep 5s
```

> This should bring your server up on a randomly assigned port for 5 seconds, call the root endpoint, and then shut down.

The response should be:

```
200 OK
```

#### Call a nonexistent endpoint

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s http://localhost:${PORT}/app/nonexistent/ && sleep 5s
```

> This should call an endpoint that does not exist. 

The response should be:

```
404 NOT FOUND
```

#### Play RPS

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s http://localhost:${PORT}/app/rps/ && sleep 5s
```

> This calls `/app/rps/` with no request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors)"}
```

#### Play RPSLS

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s http://localhost:${PORT}/app/rpsls/ && sleep 5s
```

> This calls `/app/rpsls/` with no request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors|lizard|spock)"}
```

#### Play RPS against an opponent (URLEncoded data body)

```
PORT="$(shuf -i 2000-65535 -n 1)"; SHOT="$(shuf -n1 -e rock paper scissors)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s -G --data-urlencode "shot=${SHOT}" http://localhost:${PORT}/app/rps/play/ && sleep 5s
```

> This calls `/app/rps/play/` with a URLEncoded request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}
```

#### Play RPSLS against an opponent (URLEncoded data body)

```
PORT="$(shuf -i 2000-65535 -n 1)"; SHOT="$(shuf -n1 -e rock paper scissors lizard spock)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s -G --data "shot=${SHOT}" http://localhost:${PORT}/app/rpsls/play/ && sleep 5s
```

> This calls `/app/rpsls/play/` with a URLEncoded request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors|lizard|spock)","opponent":"(rock|paper|scissors|lizard|spock)","result":"(win|lose|tie)"}
```

#### Play RPS against an opponent (JSON data body)

```
PORT="$(shuf -i 2000-65535 -n 1)"; SHOT="$(shuf -n1 -e rock paper scissors)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s -X POST -H "Content-Type: application/json" --data '{"shot":"'${SHOT}'"}' http://localhost:${PORT}/app/rps/play/ && sleep 5s
```

> This calls `/app/rps/play/` with a JSON request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}
```

#### Play RPSLS against an opponent (JSON data body)

```
PORT="$(shuf -i 2000-65535 -n 1)"; SHOT="$(shuf -n1 -e rock paper scissors lizard spock)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s -X POST -H "Content-Type: application/json" --data '{"shot":"'${SHOT}'"}' http://localhost:${PORT}/app/rpsls/play/ && sleep 5s
```

> This calls `/app/rpsls/play/` with a JSON request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors|lizard|spock)","opponent":"(rock|paper|scissors|lizard|spock)","result":"(win|lose|tie)"}
```

#### Play RPS against an opponent (parameter endpoint)

```
PORT="$(shuf -i 2000-65535 -n 1)"; SHOT="$(shuf -n1 -e rock paper scissors)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s http://localhost:${PORT}/app/rps/play/${SHOT}/ && sleep 5s
```

> This calls `/app/rps/play/(rock|paper|scissors)/` with no request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors)","opponent":"(rock|paper|scissors)","result":"(win|lose|tie)"}
```

#### Play RPSLS against an opponent (parameter endpoint)

```
PORT="$(shuf -i 2000-65535 -n 1)"; SHOT="$(shuf -n1 -e rock paper scissors lizard spock)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -s http://localhost:${PORT}/app/rpsls/play/${SHOT}/ && sleep 5s
```

> This calls `/app/rpsls/play/(rock|paper|scissors|lizard|spock)/` with no request body. 

The response should look like this:

```
{"player":"(rock|paper|scissors|lizard|spock)","opponent":"(rock|paper|scissors|lizard|spock)","result":"(win|lose|tie)"}
```

#### Look at the package.json file

```
cat package.json
```

> This should echo the contents of `package.json` to STDOUT see if there is a main file defined.

Somewhere in the output, you should see a line that says:

```
"main": "server.js",
```

#### Get the headers

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT; exit 0) & sleep 1s && curl -I -s http://localhost:${PORT}/app/ && sleep 5s
```

> This should return the headers that your API server is sending.

The response should look something like what is shown here: https://davidwalsh.name/curl-headers



#### Run a test

```
npm test
```

> This runs the test that you defined in `package.json`. 

The response should include an indication that your script ran on port 5555:

```
node server.js --port=5555
```
