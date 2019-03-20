function range(start, end) {
  if (end <= start) {
    return [];
  } else {
    return range(start, end-1).concat(end);
  }
};

// console.log(range(0,5));


function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[arr.length - 1] + sumRec(arr.slice(0, -1));
  }
};

// const n = [1, 2, 3, 4, 5];
// console.log(sumRec(n));
// console.log(n);

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent(base, (exp-1));
  }
};

// console.log(exponent(4, 5));

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    if (exp % 2 === 0) {
      return exponent2(base, exp / 2) * exponent2(base, exp / 2);
    } else {
      return base * exponent2(base, (exp - 1) / 2) * exponent2(base, (exp - 1) / 2);
    }
  }
};

// console.log(exponent2(4, 5));

function fibonacci(n) {
  let fibs = [0,1];
  if (n <= 2) {
    return fibs.slice(0, n);
  } else {
    let new_fibs = fibonacci(n-1);
    new_fibs.push(new_fibs[new_fibs.length - 1] + new_fibs[new_fibs.length - 2]);
    return new_fibs;
  }
};



// console.log(fibonacci(5));


function deepDup(arr) {
  // return arr.map(x => Array.isArray(x) ? deepDup(x) :  x);
  return arr.map(x => typeof x === 'number' ? x : deepDup(x));
};

// console.log(deepDup([1,3,[1,4,5],6]));

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return mid;
  switch (arr[mid] > target) {
    case (true):
      return bsearch(arr.slice(0, mid), target);
    case (false):
      let result = bsearch(arr.slice((mid + 1), (arr.length)), target);
      return (result === -1) ? -1 : (result + mid + 1);
  }
};

// console.log(bsearch([1,2,3,4], 4));

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let sorted_left = mergesort(arr.slice(0, mid));
  let sorted_right = mergesort(arr.slice(mid, arr.length));
  return merge(sorted_left, sorted_right);
};

function merge(left, right) {
  let merged = [];
  while (!(left.length === 0 || right.length === 0)) {
    if (left[0] < right[0]) {
      merged.push(left.shift);
    } else {
      merged.push(right.shift);
    }
  }
  return merged.concat(left).concat(right);
};

console.log(merge([5,54,1],[2,3,4]));