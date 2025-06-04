//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

function check(n) {
  for (let i = 0; i < n; i++) {
    let res = "";
    for (let s = 0; s < n - i - 1; s++) {
      res += " ";
    }
    let val = 1;
    for (let j = 0; j <= i; j++) {
      res += val + " ";
      val = (val * (i - j)) / (j + 1);
    }
    console.log(res.trim());
  }
}
let n = 5;
check(n);
