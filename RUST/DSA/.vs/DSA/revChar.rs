// e.g. 1) input :  ABDEF
// 					output : GFECB
// 	e.g. 2) input :  xtD
// 					output : Euy

fn check(s: &str){
    let mut res = String::new();
    for i in s.chars().rev(){
    let ch = i;
        if ch == 'z'{
            res.push('a');
        }else{
            res.push(((ch as u8)+1) as char);
        } 
    }
    print!("{}", res)
}

fn main(){
    check("xtD")
}