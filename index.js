let a = Number(prompt(`nhập hệ số a`))
let b = Number(prompt(`nhập hệ số b`))
let c = Number(prompt(`nhập hệ số c`))

// function nghiemPTBacHai(a, b, c) {
//     if (a === 0) {
//         return `nó không phải phương trình bậc 2`
//     } else {
//         let delta = b * b - 4 * a * c
//         if (delta < 0) {
//             return `dô nghiệm`
//         } else
//         if (delta === 0) {
//             return `phương trình có 1 nghiệm là : ` + (-b / 2 * a)
//         } else {
//             let x1 = (-b + Math.sqrt(delta)) / (2 * a)
//             let x2 = (-b - Math.sqrt(delta)) / (2 * a)
//             return `x1 = `+ x1 + ` ` + `x2= ` + x2
//         }
//     }
// }

let nghiem = () => {
    if (a === 0) {
        return `nó không phải phương trình bậc 2`
    } else {
        let delta = b * b - 4 * a * c
        if (delta < 0) {
            return `dô nghiệm`
        } else
        if (delta === 0) {
            return `phương trình có 1 nghiệm là : ` + (-b / 2 * a)
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a)
            let x2 = (-b - Math.sqrt(delta)) / (2 * a)
            return `x1 = `+ x1 + ` ` + `x2= ` + x2
        }
    }
}

alert(nghiem(a, b, c))
