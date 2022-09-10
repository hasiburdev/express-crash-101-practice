exports.notFoundHandler = (_req, _res, next) => {
  const error = new Error("404 Resource not found!");
  error.status = 404;
  next(error);
};
exports.errorHandler = (error, _req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: "Something went wrong!" });
};
