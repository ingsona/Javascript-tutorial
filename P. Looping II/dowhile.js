var repeat = confirm("ulangin terus klik oke aja")
var counter = 0

do{
    counter++
    repeat = confirm("ulangin terus klik oke aja")
}while(repeat)

document.write("anda sudah ulangin ini sebanyak "+ counter +" kali")