// masukan angka 
var p =prompt('mau ulang berapa kali')
var b=prompt('batas angka')
var i= 0
while (i < p){
    var angka1=Math.floor(Math.random() * b ) + 1  
    var angka2=Math.floor(Math.random() * b ) + 1  
    var ja=prompt("Hitung "+angka1+" ditambah "+angka2)
    var ha= angka1+angka2
    if (ja==ha){
        alert("Jawaban betul")
    }else{
        alert("salah")
    }
    i++;  
}   