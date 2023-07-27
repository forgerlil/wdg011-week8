const secure = (req, res, next) => {
  const { token } = req.params;
  if (token.length >= 3) return next();
  console.log('The token was less than 3 characters long!');
  return res.sendStatus(403);
};

export default secure;
