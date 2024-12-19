function compare(a, b) {
  if (a < b) {
    return 1; //Corrected for descending
  } else if (a > b) {
    return -1; //Corrected for descending
  } else {
    return 0; 
  }
}

let arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [5, 4, 3, 2, 1]

arr = [5, 4, 3, 2, 1];
arr.sort(compare);
console.log(arr); // Output: [5, 4, 3, 2, 1] 