
A minimal repo that demonstrates inconsistent handling of `content-length`-less requests between `now dev` and an actual deployment

This contains a tiny serverless lambda ([echo.js](https://github.com/bjoerge/now-content-length-repro/blob/master/echo.js)) that reads the request body, logs it and echoes it to the response.

## Run against now dev
    
    $ now dev
    
    $ node test.js http://localhost:3000

   The `now dev` server logs:
  >  request body: kransekake

## Run against a deployment

    $ now
    
    $ node test.js <deployment url>

   The server logs says:
  >  request body:
 
