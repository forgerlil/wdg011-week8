# Vanilla NodeJS

[x] Create a folder exercises_vanilla then go to this folder in your terminal and execute npm init -y

- What file did you create with the previous command?
- What is the role of this file?
- https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/

[x] In a file exercise1.js: Create a code that displays hello in the console.
To launch this file, type in your terminal node exercise1.js.

- https://nodejs.org/api/console.html

[x] In a file exercise2.js: Using the writeFile function, write hello in a file called test.html.

- https://nodejs.org/api/fs.html

[x] In a file exercise3.js: Using the readFile function, read the file test.html and display the content in the console.
<br>
[x] In a file exercise4.js: Write the work done in the previous exercises in ES5 or ES6 (depending which version you used).
<br>
[x] In a file exercise5.js: Copy this code and run it in the console. What’s going on?

- https://nodejs.org/api/http.html

```js
const http = require('http');
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
});
server.listen(80);
console.log('Server running at http://127.0.0.1:80/');
```

[x] In a file exercise6.js: Install the module axios and retrieve the html code from google.com.
