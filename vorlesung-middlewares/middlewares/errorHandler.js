const errorHandler = (err, req, res, next) => {
  return res.status(err.statusCode || 500).send(err.message);
};

export default errorHandler;
