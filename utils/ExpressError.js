class ExpressError extends Error {
    /**
     * @param {number} statusCode – HTTP status code (e.g., 404, 500)
     * @param {string} message    – Human‑readable error message
     */
    constructor(statusCode, message) {
      super(message);
  
      // Ensure Error name is maintained
      this.name = this.constructor.name;
  
      // Correct property name & value
      this.statusCode = statusCode;
  
      // Capture stack trace (Optional but useful)
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ExpressError;
  