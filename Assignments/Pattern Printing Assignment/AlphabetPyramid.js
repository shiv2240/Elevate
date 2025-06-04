//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

function check(n) {
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let s = 0; s < n - i - 1; s++) {
      res += " ";
    }
    for (let j = 0; j <= i; j++) {
      res += String.fromCharCode(65 + j);
    }
    for (let j = i - 1; j >= 0; j--) {
      res += String.fromCharCode(65 + j);
    }
    console.log(res);
  }
}

let n = 5;
check(n);
