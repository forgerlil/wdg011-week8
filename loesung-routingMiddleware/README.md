# Routing Middleware

[ ] Create a server.js with the Express application.
<br>
[ ] Create a function secure() that needs to apply on a GET route ‘/verify/:token’ (app.get()).
<br>
[ ] Inside the secure function, inspect if there is a param with the name token and a value
<br>
[ ] If the token has a value and is longer than 3 characters, continue (i.e. send the message ‘Hello World!’).
<br>
[ ] Create a route to manage the case when the token doesn’t exist and send back a response with the HTTP code 403.

### Additional steps

[ ] Create a new database
<br>
[ ] Create a new table called token that has an id and a value (type : text)
<br>
[ ] Create a new table called users that has some properties that you can decide. It must have a reference to the id of the token table
<br>
[ ] Insert some users

- In your NodeJs Server, create routes to :
  [ ] Create a user
  <br>
  [ ] Create a token for a specific user
  <br>
  [ ] Create a route GET on endpoint /verify/:token. The process must :
  <br>
  [ ] Check if the token is available in the database
  <br>
  - Check if the token is available on a user
    <br>
    [ ] if the user is linked to this token –> res.send(“token valid”);
    <br>
    [ ] if the token doesn’t exist or no user is linked to that –> res.status(401).send(“invalid token”);
