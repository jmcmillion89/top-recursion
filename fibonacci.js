function fibs(n) {
  for (let i = 1; i < n; i++) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  console.log(fibArr);
  fibArr = [0, 1];
}
let fibArr = [0, 1];
let count = 1;
let num1 = 0;
let num2 = 1;
let next;

function fibsR(n) {
  if (n === 0) {
    console.log(fibArr[0]);
    return;
  }
  if (count > n) {
    fibArr = [0, 1];
    return;
  }
  if (count === 1) {
    console.log(num1);
    console.log(num2);
    count++;
    return fibsR(n);
  }
  if (count > 1) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    count++;
    console.log(next);
    return fibsR(n);
  }
}
