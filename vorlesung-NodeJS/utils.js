const randomNumGenerator = (limit = 1) => {
  return Math.round(Math.random() * limit);
};

const capitalize = (string) => {
  return string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

module.exports = { randomNumGenerator, capitalize };

// export { randomNumGenerator, capitalize };
