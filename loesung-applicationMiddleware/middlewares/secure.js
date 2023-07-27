const secure = (req, res, next) => {
  const { token } = req.query;
  if (token) return next();
  console.log('There was no token in the query!');
  return res.sendStatus(403);
};

export default secure;
