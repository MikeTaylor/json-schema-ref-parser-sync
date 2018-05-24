var $RefParser = require('json-schema-ref-parser');

exports.dereference = (schema, options) => {
  var savedError, savedResult, done = false;

  $RefParser.dereference(schema, options, (error, result) => {
    savedError = error;
    savedResult = result;
    done = true;
  });

  require('deasync').loopWhile(() => !done);

  if (savedError) throw savedError;
  return savedResult;
}
