// masukan angka
var p = prompt("mau ulang berapa kali");
var b = prompt("batas angka");
var c = prompt("1. Tambah  2. Kurang  3. Kali  4. Bagi");
var i = 0;
var n = 0;
if (c == 1) {
  while (i < p) {
    var angka1 = Math.floor(Math.random() * b) + 1;
    var angka2 = Math.floor(Math.random() * b) + 1;
    var ja = prompt("Hitung " + angka1 + " ditambah " + angka2);
    var ha = angka1 + angka2;
    if (ja == ha) {
      alert("Jawaban betul");
      n++;
    } else {
      alert("salah");
    }
    i++;
  }
} else if (c == 2) {
  while (i < p) {
    var angka1 = Math.floor(Math.random() * b) + 1;
    var angka2 = Math.floor(Math.random() * b) + 1;
    var ja = prompt("Hitung " + angka1 + " dikurang " + angka2);
    var ha = angka1 - angka2;
    if (ja == ha) {
      alert("Jawaban betul");
      n++;
    } else {
      alert("salah");
    }
    i++;
  }
} else if (c == 3) {
  while (i < p) {
    var angka1 = Math.floor(Math.random() * b) + 1;
    var angka2 = Math.floor(Math.random() * b) + 1;
    var ja = prompt("Hitung " + angka1 + " dikali " + angka2);
    var ha = angka1 * angka2;
    if (ja == ha) {
      alert("Jawaban betul");
      n++;
    } else {
      alert("salah");
    }
    i++;
  }
} else if (c == 4) {
  while (i < p) {
    m = 0;
    while ((m = 1)) {
      var t = Math.floor(Math.random() * b) + 1;
      var k = Math.floor(Math.random() * b) + 1;
      if (t % 2 == 0 && k % 2 == 0) {
        m = 1;
      } else {
        m = 0;
      }
    }
    var angka1 = t;
    var angka2 = k;
    var ja = prompt("Hitung " + angka1 + " di bagi " + angka2);
    var ha = angka1 / angka2;
    if (ja == ha) {
      alert("Jawaban betul");
      n++;
    } else {
      alert("salah");
    }
    i++;
    m = 1;
  }
}

// persen = (laba / modal)*(100);
// persen = persen.toFixed(2);
nilai = (n / i) * 100;
alert("Dari " + i + " soal benar adalah " + n + " Dan Nilainya adalah " + nilai);
