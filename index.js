function makeMeasurable(target) {
  let isCalled = false;
  return new Proxy(target, {
    apply: (target, thisArg, args) => {
      if(!target.name) {
        throw 'The function must have a name'
      }
      if (!isCalled) {
        console.time(target.name);
        isCalled = true;
        const result = Reflect.apply(target, thisArg, args);
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
  makeMeasurable
};