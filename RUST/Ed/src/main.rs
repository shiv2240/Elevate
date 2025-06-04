// fn main() {
//     let mut x = 10;

//     for _i in 0..10{
//         x = x+100;
//     }
//      print!("x:{}",x);
// }
    // let y: u32 = 1000;
    // let z: f32 = 1000.01;
    // print!("x:{}",x);
    // print!("y:{}",y);
    // print!("z:{}",z);


// fn main(){
//     let is_male = false;
//     let is_above_18: bool = true;

//     if is_male{
//         println!("You are a male");
//     }else{
//         println!("You are not male")
//     }
//     if is_male && is_above_18{
//         println!("You are a legal male")
//     }
// }

// fn main(){
//     let mut ax: &str = "abcdefghijklmnopqrstuvwxyz";
//     for i in 0..100{
//         ax = ax + "ajjdnd0";
//     }
//     print!("ax: {}", ax);
// }

fn main(){
    let treeting: String = String::from("hello world");
    println!("{}", treeting);
    let char1 = treeting.chars().nth(1);
    // match char1 {
    //     Some(c  )=>println!("{}", c),
    //     None => println!("NO caracter at 1000 index")
    // }
    print!("char:{}", char1.unwrap())
}