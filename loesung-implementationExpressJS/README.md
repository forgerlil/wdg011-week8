# Implementation of ExpressJS

[ ] Create a folder exercises_express then go to this folder in your terminal and execute npm init -y
<br>
[ ] Install express into your directory with the npm install express command. We would like to modify our following code so that it displays a message when the person arrives on the page with their browser on (http://localhost:3000), make an app.js file with:

- http://expressjs.com/en/guide/routing.html

```js
const express = require('express');
const app = express();

const server = app.listen(3000, function () {
  console.log('Hello');
});
```

[ ] For this Exercise we will need a little software called Insomnia, it will allow us to test our URLs.
We now want that when the user sends a PUT request to the home (http://localhost:3000/) it sends back an HTML file with:

- https://expressjs.com/en/4x/api.html#res.sendFile

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    How are you?
  </body>
  <html></html>
</html>
```

[ ] We now want that when the user sends a DELETE request to the home (http://localhost:3000/) it sends back a JSON with:

- https://expressjs.com/en/4x/api.html#res.json

```json
{ "good": "yep" }
```

[ ] Render this EJS code if the user accesses the URL /test-ejs and render this page with my first title as value of myTitle variable.

- https://ejs.co/
- https://expressjs.com/en/guide/using-template-engines.html
- https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <% if (myTitle) { %>
    <h1><%= myTitle %></h1>
    <% } %>
  </body>
</html>
```

[ ] We pass an array to our page /test-ejs2. Create an EJS page that uses the forEach method to list each element.

```js
{
  users: ['Bob', 'John', 'Jane'];
}
```

[ ] Thanks to MethodOverride, create a page that will send a PUT request on /.

- https://github.com/expressjs/method-override

[ ] Create a form (using the method POST) with two input:text fields to enter the first and last name and send it on the /showPost route.
Display in the console the result of the POST.

- https://expressjs.com/en/api.html#express.json

[ ] Create a form (using the method GET) with two input:text fields to enter the first and last name and send it on the /showGet route. Display in the console the result of the GET.

- https://expressjs.com/en/api.html#req.query

[ ] Create a route of the type /number/1 where the number will be a variable :id and will be displayed on the page. E.g. on the route /number/1337 we will see: `The number is 1337`

- https://expressjs.com/en/api.html#req.param

[ ] Add Axios to your project and create a GET request on http://jsonplaceholder.typicode.com/posts/1 when the user visits http://localhost:3000/postlist.

- https://github.com/axios/axios

[ ] Via the query in the previous exercise write the result of the query in a posts.json file.

- https://nodejs.org/api/fs.html

[ ] Install the package pm2 globally and set up a web server with your current site and display the list of servers.

- https://github.com/Unitech/pm2

[ ] Create a server for your website with 1 cluster.

- https://pm2.keymetrics.io/docs/usage/cluster-mode/

[ ] Set up a server that automatically restarts itself when files are modified.

- https://pm2.keymetrics.io/docs/usage/watch-and-restart/

[ ] Display all the logs of your server then display the RAM/CPU usage of your application.

- https://pm2.keymetrics.io/docs/usage/log-management/
- https://pm2.keymetrics.io/docs/usage/monitoring/
