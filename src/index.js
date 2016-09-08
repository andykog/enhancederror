
function EnhancedError(options) {
  var finalOptions;
  if (options && typeof options === 'object') {
    finalOptions = options;
  } else {
    finalOptions = {};
    finalOptions.message = arguments[0];
    finalOptions.code = arguments[1]
  }
  if (finalOptions.message) {
    finalOptions.message = String(finalOptions.message);
  } else {
    finalOptions.message = '';
  }
  var e = Error.call(this, finalOptions.message);
  for (var p in finalOptions) if (finalOptions.hasOwnProperty(p)) {
    e[p] = finalOptions[p];
  }
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(e, EnhancedError.prototype);
  } else {
    e.__proto__ = EnhancedError.prototype;
  }
  return e;
}

EnhancedError.prototype = Object.create(Error.prototype, { constructor: { value: EnhancedError, writable: true, configurable: true }});

module.exports = EnhancedError;


