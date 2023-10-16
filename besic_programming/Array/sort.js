const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // sort ini untuk mengurutkan dari yang kecil ke yang besar
console.log(fruits)

const points = [5, 8, 2, 9, 4, 6];
points.sort(function(a, b){return a-b}); // untuk mengurutkan kecil ke yang besar
console.log(points)

const points1 = [5, 8, 2, 9, 4, 6];
points1.sort(function(angkakecil, angkabesar){
    return angkabesar - angkakecil
}); // untuk mengurutkan besar ke yang kecil
console.log(points1)