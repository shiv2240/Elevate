// *   *
//  * *
//   *
//  * *
// *   *


function check(n){
    for(let i=0; i<n;i++){
        let res=""
        for(j=0;j<n;j++){
            if((i==j)|| ((i>=n-j-1 )&& (i<=n-j-1))){
                res+="*"
            }else{
                res+=" "
            }
        }
        console.log(res)
    }
}
let n=8
check(n)