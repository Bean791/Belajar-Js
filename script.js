// Object Literal


// let orang ={
//     nama: 'Bean',
//     kalori: 10,
//     makan: function(ukuran){
//         this.kalori = this.kalori + ukuran;
//         console.log(`Selamat makan ${this.nama}, Selamat menikmati`)
//     }
// }



//  Function Declaration


// function orang(nama, ukuran){
//     let orang = {};
//     orang.nama=nama;
//     orang.ukuran = ukuran;

//     orang.makan = function (porsi){
//         this.ukuran += porsi;
//         console.log(`Hallo ${this.nama}, Selamat Menikmati`)
//     }
//     orang.main = function (jam){
//         this.ukuran -= jam;
//         console.log(`Hallo ${this.nama}, Selamat Bermain`)
//     }
//     return orang;
// }
// let Bean = orang('Bean', 10);



// Constructor Function


function orang(nama, ukuran){
    this.nama=nama;
    this.ukuran = ukuran;

    this.makan = function (porsi){
        this.ukuran += porsi;
        console.log(`Hallo ${this.nama}, Selamat Menikmati`)
    }
    this.main = function (jam){
        this.ukuran -= jam;
        console.log(`Hallo ${this.nama}, Selamat Bermain`)
    }

}

let Bean = new orang('Bean',10)


