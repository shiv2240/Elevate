var addSum = value(7)

addSum(10) //17
addSum(21) //28


function value(x){
    console.log("x",x)
    return function(y){
        console.log("y",y)
        console.log(x+y)
    }
}

