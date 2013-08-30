
# number-range

  Make sure a number is in range.

## Installation

  Install with [component(1)](http://component.io):

    $ component install helplet/number-range

## API

### numberRange.check(min, [max], [throws], number)

  Returns `true` if `number` is inbetween `min` & `max`.
  Otherwise it will return `false` or throw a `RangeError`, if `throws` is `true`.

  `min` can be null, which will be interpreted as `-Infinity`.
  `max` can be null or omitted, which will be interpreted as `+Infinity`.
  `throws` can be omitted, which will be treated as `false`.

### numberRange.delta(min, [max], number)

  Returns `0`, if `number` is inbetween `min` & `max`.
  If `number` is larger than `max` it will return that difference (ex: `+1`).
  If `number` is smaller than `min` it will return that difference (ex: `-1`).

  `min` can be null, which will be interpreted as `-Infinity`.
  `max` can be null or omitted, which will be interpreted as `+Infinity`.

### numberRange.range(min, [max], number)

  Returns `number`, if it is inbetween `min` & `max`.
  Otherwise it will return `min` or `max` depending on
  `number` being smaller than `min` or larger than `max`.

  `min` can be null, which will be interpreted as `-Infinity`.
  `max` can be null or omitted, which will be interpreted as `+Infinity`.

## License

  MIT
