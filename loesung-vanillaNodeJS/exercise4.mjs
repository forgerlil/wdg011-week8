import fs from 'fs/promises';

// fs.writeFile('testes6.html', 'Hello', (err) => {
//   if (err) return console.log(err);
// });

fs.writeFile('testes6.html', 'Hello')
  .then(() => {
    fs.readFile('testes6.html', 'utf8')
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
