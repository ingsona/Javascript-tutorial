var undian = prompt("Selamat anda mendapatkan undian,silahkan pilih hadiah 1-3: ")

var hadiah = "";

switch(undian){
    case "1":
        hadiah = "kaos"
        break
    case "2":
        hadiah = "laptop"
        break
    case "3":
        hadiah = "stiker"
        break
    default: 
        document.write("<h3>pilihan hanya 1,2 , atau 3</h3>") 
}

if(hadiah === ""){
    document.write("<h4>gagal dapat hadiah</h4>")
}else{
    document.write("<h4>selamat anda dapat "+ hadiah)
}