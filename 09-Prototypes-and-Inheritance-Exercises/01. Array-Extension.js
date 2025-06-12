(function addArrayMethods() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (startNumber) {
    return this.slice(startNumber);
  };

  Array.prototype.take = function (number) {
    return this.slice(0, number);
  };

  Array.prototype.sum = function () {
    return this.reduce((acc, current) => acc + current, 0);
  };

  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

let arrayData = [1, 2, 3, 4];
console.log(arrayData.last());
console.log(arrayData.skip(1));
console.log(arrayData);
console.log(arrayData.take(1));
console.log(arrayData.sum());
console.log(arrayData.average());
