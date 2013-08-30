var exports = module.exports;

/**
 * Sanitize user inputs.
 * @param  {Number}  min    optional
 * @param  {Number}  max    optional
 * @param  {Boolean} throws optional
 * @param  {Number}  number
 * @return {Object}  { min, max, throws, number }
 * @private
 */
function sanitize(min, max, throws, number) {
  var _min = typeof min
  , _max = typeof max
  , _throws = typeof throws
  , _number = typeof number
  , arity = arguments.length;

  switch(arity) {
    case 3:
      if(_max === "boolean") {
        number = throws;
        throws = max;
        max = Infinity;
      } else {
        number = throws;
        throws = false;
      }
      break;
    case 2:
      number = max;
      throws = false;
      max = Infinity;
      break;
    case 1: throw new Error("Too few arguments: `[" + min + "]`");
  }

  if(_min !== "number") min = -Infinity;

  return { min: min, max: max, throws: throws, number: number };
}

/**
 * Make sure `number` is in between `min` and `max`.
 * @param  {Number}  min    optional
 * @param  {Number}  max    optional
 * @param  {Boolean} throws optional
 * @param  {Number}  number
 * @return {Boolean}
 * @throws {RangeError} If `throws` is `true` and `number` is out of range.
 */
exports.check = function check(min, max, throws, number) {
  var args = sanitize(min, max, throws, number);
  min = args.min, max = args.max, throws = args.throws, number = args.number;

  if(number < min)
    if(throws)
      throw new RangeError("`" + number + "` needs to be larger than `" + min + "`.");
    else
      return false;
  if(number > max)
    if(throws)
      throw new RangeError("`" + number + "` needs to be smaller than `" + max + "`.");
    else
      return false;

  return true;
};

/**
 * Calculates how far `number` is out of range.
 * @param  {Number} min    optional
 * @param  {Number} max    optional
 * @param  {Number} number
 * @return {Number} =0: `number` is in range.
 *                  <0: `number` is below range.
 *                  >0: `number` is above range.
 */
exports.delta = function delta(min, max, number) {
  var args = sanitize(min, max, number);
  min = args.min, max = args.max, number = args.number;

  if(number < min) return number - min;
  if(number > max) return number - max;
  return 0;
};

/**
 * Make sure that `number` is between `min` and `max`;
 * @param  {Number} min    optional
 * @param  {Number} max    optional
 * @param  {Number} number
 * @return {Number}
 */
exports.range = function range(min, max, number) {
  var args = sanitize(min, max, number);
  min = args.min, max = args.max, number = args.number;

  if(number < min) return min;
  if(number > max) return max;
  return number;
};