Documentation for API can be found [over here](https://documenter.getpostman.com/view/4315841/RWEnkv4j)

### installing modules
`npm i`

note: for development make sure mongo db is locally installed. You may need to configure or create `server/config/config.json` file to have your own JSON WEB TOKEN SECRET, for ease I'm shipping it with code now. BUt it may be removed in near future.

### for testing

note: for now if you run testing code, it currently wipes out **todos** local database, add new dummy entries

`npm run test-watch`



note:

remove toHexString on generateAuthToken

replace
"user.tokens.push({access, token});"

with


user.tokens = user.tokens.concat([{access, token}]);


in generateAuthToken


### getting started

`node server/server.js`
