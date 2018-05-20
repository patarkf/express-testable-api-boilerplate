/**
 * Instead of using try{} catch(e) {} in each controller, we wrap the function in
 * catchErrors(), catch and errors they throw, and pass it along to our
 * express middleware with next().
 *
 * @param {*} fn
 */
const catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next);

/**
 * When a route is hit and not found, it's marked as as 404 and
 * passed along to the next error handler to display
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

/**
 * Simple Express validator errors handler.
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const validationErrors = (err, req, res, next) => {
  if (err.mapped()) return res.status(422).send({ errors: err.mapped() });

  return next(err);
};

/**
 * Detailed error message with stack-trace or not depending on env.
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 */
const displayErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: (process.env.NODE_ENV !== 'production') ? err : {},
  });
};

module.exports = {
  catchErrors,
  notFound,
  validationErrors,
  displayErrors,
};
