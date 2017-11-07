'use strict';

function makeMeasurable(target) {
  var isCalled = false;
  return new Proxy(target, {
    apply: function apply(target, thisArg, args) {
      if (!target.name) {
        throw 'The function must have a name';
      }
      if (!isCalled) {
        console.time(target.name);
        isCalled = true;
        var result = Reflect.apply(target, thisArg, args);
        isCalled = false;
        console.timeEnd(target.name);
        return result;
      } else {
        return Reflect.apply(target, thisArg, args);
      }
    }
  });
}

module.exports = {
  makeMeasurable: makeMeasurable
};