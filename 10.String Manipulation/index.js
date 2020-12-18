// length
var txt = "qwerty"
document.getElementById('name').innerHTML = txt.length

// indexof
var txt = "this is example of indexof"
document.getElementById('name').innerHTML = txt.indexOf('of')

// substr = mengambil kata dari kalimat
var txt = "Apple, Microsoft, Linux"
document.getElementById('name').innerHTML = txt.substr(0, 5)

// replace 
var txt = "please visit us"
document.getElementById('name').innerHTML = txt.replace('us','me')

// toUpperCase
var txt = 'please visit us'
document.getElementById('name').innerHTML = txt.toUpperCase()

// toLowerCase
var txt = 'PLEASE VISIT ME'
document.getElementById('name').innerHTML = txt.toLowerCase()

// charAt
var txt = 'please visit us'
document.getElementById('name').innerHTML = txt.charAt(0)

// split
var txt = 'a,b,c,d'
var txtArray = txt.split(',')
console.log(txtArray)
document.getElementById('name').innerHTML = txtArray[0]

// call string like array
var txt = 'a,b,c,d'
document.getElementById('name').innerHTML = txt[1]