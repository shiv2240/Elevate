// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

function check(n) {
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < i; j++) {
      res += " ";
    }
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      res += "*";
    }
    console.log(res);
  }
  for (let i = 1; i < n; i++) {
    let res = "";
    for (let j = 0; j < n - i - 1; j++) {
      res += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      res += "*";
    }
    console.log(res);
  }
}
let n = 5;
check(n);
