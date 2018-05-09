### installing modules
`npm i`

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
