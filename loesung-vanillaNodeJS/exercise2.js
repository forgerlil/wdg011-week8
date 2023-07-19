const fs = require('fs');

fs.writeFile('test.html', 'Hello', (err) => {
  if (err) return console.log(err);
});
