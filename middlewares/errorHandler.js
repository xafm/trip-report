const {GeneralError} = require('../util/errorTypes');

module.exports.async = (req, res, next, promise) => {
  promise
    .then(responseData => {
      res.status(200).json({
        success: true,
        data: responseData,
      });
    })
    .catch(err => {
      if (err instanceof GeneralError) {
        return res.status(err.getStatusCode()).json({
          success: false,
          errors: [{message: err.message}],
        });
      }

      return res.status(500).json({
        success: false,
        errors: [{message: err.message}],
      });
    });
};

module.exports.nonAsync = (req, res, next, fn) => {
  try {
    const data = fn(req);
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    if (err instanceof GeneralError) {
      return res.status(err.getStatusCode()).json({
        success: false,
        errors: [{message: err.message}],
      });
    }

    return res.status(500).json({
      success: false,
      errors: [{message: err.message}],
    });
  }
};
