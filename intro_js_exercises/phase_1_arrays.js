Array.prototype.myUnique = function() {
  const arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  console.log(arr);
}


// const nums = [1, 1, 2, 3, 3]
// nums.myUnique();

Array.prototype.myTwoSum = function() {
  const arr = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var k = i + 1; k < this.length; k++) {
      if (this[i] + this[k] === 0) {
        arr.push([i, k]);
      }
    }
  }
  console.log(arr);
}

// const nums = [-1, 1, 2, 3, 4, -3]
// nums.myTwoSum();


Array.prototype.myTranspose = function() {
  const transposed = [];
  
  for (let i = 0; i < this.length; i++) {
    const row = []
    for (let k = 0; k < this.length; k++) {
      row.push(this[k][i])
    }
    transposed.push(row)
  }
  console.log(transposed);
}

// const nums = [[1,2,3],[4,5,6],[7,8,9]]
// nums.myTranspose();
