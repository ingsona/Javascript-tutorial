var repeat = confirm("ulangin terus klik oke aja")
var counter = 0

while(repeat){
    counter++
    repeat = confirm("ulangin terus klik oke aja")
}

document.write("anda sudah ulangin ini sebanyak "+ counter +" kali")