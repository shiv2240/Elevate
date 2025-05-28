function check(n){
    let res =""
    for(let i=n.length-1;i>=0;i--){
        let char = n[i]
        if(char==="z") res+="a"
        else res+= String.fromCharCode(char.charCodeAt(0)+1)
    }
    console.log(res)
}



check("ABDEF")