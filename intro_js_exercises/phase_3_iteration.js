Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let num = this[i];
        this[i] = this[i + 1];
        this[i + 1] = num;
        sorted = false;
      } 
    }
  }
  console.log(this);
};

// const nums = [6,3,5,1,2,9,3];
// nums.bubbleSort();

String.prototype.substring = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let k = i+1; k <= this.length; k++) {
      if (!arr.includes(this.slice(i, k))) {
        arr.push(this.slice(i, k)) 
      }
    }
  }
  return arr;
};

console.log('abcdefg'.substring());