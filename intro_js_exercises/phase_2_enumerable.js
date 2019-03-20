const nums = [1, 2, 3];

// const callback = function (x) {
//   return (x * 2);
// };

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// nums.myEach(callback);

Array.prototype.myMap = function(callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  
  console.log(arr);
};

// nums.myMap(callback);

const thing = function(x, y) {
  return (x * y);
};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue || this[0];
  const arr = initialValue ? this : this.slice(1);
  arr.myEach(function(el) {
    acc = callback(acc, el);
  });
  console.log(acc);
};

nums.myReduce(thing);