class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getStatusCode() {
    if (this instanceof BadRequest) return 400;
    if (this instanceof Unauthorized) return 401;
    if (this instanceof NotFound) return 404;
    if (this instanceof InternalServerError) return 500;
    return 500;
  }
}

class BadRequest extends GeneralError {}
class Unauthorized extends GeneralError {}
class NotFound extends GeneralError {}
class InternalServerError extends GeneralError {}

module.exports = {
  GeneralError,
  BadRequest,
  Unauthorized,
  NotFound,
  InternalServerError
};
