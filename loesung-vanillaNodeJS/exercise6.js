const axios = require('axios');
const fs = require('fs');

const checkGoogle = async () => {
  const { data } = await axios('https://google.com');
  fs.writeFile('copyGoogle.html', data, 'utf8', (err) => {
    if (err) return console.log(err);
  });
};

checkGoogle();
