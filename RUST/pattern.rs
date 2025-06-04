fn generate_square_pattern(n: usize) {
    for i in 1..=n {
        let mut row = String::new();
        for j in 1..=n {
            if i == 1 {
                row.push_str(&format!("{}\t", j));
            } else if i == n {
                row.push_str(&format!("{}\t", n - j + 1));
            } else {
                if j == 1 {
                    row.push_str(&format!("{}\t", i));
                } else if j == n {
                    row.push_str(&format!("{}\t", n - i + 1));
                } else {
                    row.push_str("\t");
                }
            }
        }
        println!("{}", row.trim());
    }
}

fn main() {
    generate_square_pattern(10);
}
