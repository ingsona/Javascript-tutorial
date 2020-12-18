var angka = [1,2,3,4,5,6,7,8]

var angka2 = angka.map(function(e){
    return e * 5 // memanggil callback 
})

console.log(angka2.join(" "))