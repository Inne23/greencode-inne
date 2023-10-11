// ini function perkalian
function perkalian(angka1, angka2, angka3) {
    return angka1 * angka2 * angka3
    
}
let varperkalian = perkalian (3, 5, 7)
console.log(varperkalian)


// ini membuat function namaku
const namaku= function (nama) {
    console.log("hello Namaku", nama )  
}
namaku("nama")

// ini function dalam function
function pengurangan(a, b) {
    return a - b 
}
function pertambahan(a, b) {
    return a + b   
}
function kalkulasi(a, b, fungsi) {
    return fungsi(a, b)
}
console.log(kalkulasi(3, 5, pengurangan))
    
