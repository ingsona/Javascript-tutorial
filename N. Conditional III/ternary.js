var pertanyaan = prompt("apakah benar mata uang indonesia adalah rupiah ? : ")

var jawaban = (pertanyaan.toUpperCase()== "IYA") ?
    "Benar" : "Salah"
    document.write(`Jawaban aku <strong>${jawaban}</strong>`)