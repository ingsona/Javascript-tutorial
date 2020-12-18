var username = prompt("Username: ")
var password = prompt("Password: ")

if(username == "dumbways.id"){
    if(password == "dumbways123"){
        document.write("<h2>anda telah login</h2>")
    }else{
        document.write("<p>password salah</p>")
    }
}else{
    document.write("<p>Anda Ilegal</p>")
}