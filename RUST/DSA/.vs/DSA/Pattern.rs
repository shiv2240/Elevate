fn pattern(n: i8){
    if n==1 {
        let n = 5;
        for _i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if j==n-1{
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n==2 {
        let n = 5;
        for i in 1..n*2{
        let mut res = String::new();
            for j in 0..n{
                if (i==1) || (i==n*2-1)|| (i==n*2/2) || (j==n-1 && i<=n*2/2) || (j==0 && i>=n*2/2){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
                println!("{}",res)
        }
    } else if n==3 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (i==1) || (i==n*2-1) || ( i==n*2/2) || (j==n-1){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n==4 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (i<=n*2/2 && j==0) || ( i==n*2/2) || (j==n-1){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n == 5 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (i==1) || (i==n*2-1) || ( i==n*2/2) || (j==n-1 && i>=n*2/2) || (j==0 && i<=n*2/2){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n==6 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (j==0) || (i==n) || (j==n-1 && i>=n*2/2) || (i==n*2-1){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n==7 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (i==1) || (j==n-1){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n==8 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (i==1) || (i==n*2-1) || (i==n) || (j==n-1) || (j==0){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n==9 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (i==1) || (i==n*2-1) || (i==n) || (j==n-1) || (j==0 && i<=n){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    } else if n==0 {
        let n = 5;
        for i in 1..n*2{
            let mut res = String::new();
            for j in 0..n{
                if (i==1)  || (i==n*2-1) || (j==n-1) || (j==0){
                res.push_str("* ")
                }else{
                    res.push_str("  ")
                }
            }
            println!("{}",res)
        }
    }
}

fn main() {
   pattern(7)
}