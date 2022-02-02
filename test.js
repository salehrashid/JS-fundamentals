//dasar dasar syntax dari javascript

// penulisan komentar 
// komentar satu baris 

/**
 * komentar lebih
 * dari satu baris
 */

//penulisan identifier
// var kelasSaya
// var kelas_saya
// var kelas$saya
// var kelas2

//statement
/**
 * statement atau pernyataan js yang paling dasar.
 * dia cirinya diakhiri oleh semicolon atau titik koma, namun sekarang tidak perlu
 * statement memiliki tugas tertentu
 */
// let nama = 'saleh'// pendeklarasi variable
// let nama1 = 'rashid'// pendeklarasi variable
// console.log(nama)                       //empat baris ini adalah statement
// console.log(nama1)






// console.log('hello world');
// console.log(12345);
// console.log(true);

// var a ='hello world';
// console.log(a);

// function keluarkan(){
//     alert("keluar")
// }

//expression

//kode yang berfungsi untuk menghasilkan nilai tertentu 

// let x = 1 //statement biasa
// let y = 2
// let z = x + y //statement yang berisi expression
// //console.log(z)

// if (z>1){//statement berisi boolean
//     console.log('nilai z gede')
// }


/**
 * global scope
 * 
 * nilai bisa diakses oleh semua function
 */

// let a = 1
// function tiga(){
//     a = 3
//     console.log(a)
// }
// function empat() {
//     a = 4
//     console.log(a)
// }
// tiga()
// empat()


//block scope

// function sayHai() {
//     if(true){
//         let hola = 'hai ngap'
//         let hello = 'hello world!!'
//         console.log(hola)
//         console.log(hello)
//     }
// }
// sayHai()


//closure

// function hello(nama, julukan){
//     var a = 'hello,'+ nama+' '+julukan //nama adalah nama dari parameter
//     return function(){
//         console.log(a)
//     }
// }
// var name = hello("saleh")
// name()

// function identitas(nama, kelas, asal){
//     var a = 'nama saya' + ' ' + nama + ' ' + 'kelas' + ' ' + kelas + ' ' + 'saya dari' + ' ' + asal
//     return function(){
//         console.log(a)
//     }
// }
// var identity = identitas("saleh", "X RPL B", "brebes")
// identity()


//Variable

/**
 * keyword variable yang ada di js yaitu:
 * var, let, const
 */

//variable var 
/**
 * bersifat mutable artinya bisa merubah value atau nilanya
 * hanya memiliki dua function scope yaitu global scope dan local function scope
 */

// var a = 'awali pagi mu dengan sarapan'

// a = 'awali pagimu dengan harapan'
// console.log(a)


//scope var
// var web = 'cahkoding.com'
// function website(){
//     console.log(web)
//         if (true){
//             var tagline = "belajar koding untuk semua"
//     }  
//     console.log(tagline)
// }
// website()


// let buah = 'apel'
// buah = 'mangga'
// console.log(buah)

/**
 * global scope
 * local scope
 * block scope
 */

// let motor = 'ninja'
// function kendaraan(){
//     console.log(motor)
//     if (true){
//         let mobil = 'pajero'
//         console.log(mobil)
//     }
// }
// kendaraan()

//variable const

/**
 * sifatnya immutable atau tidak bisa diubah setelah di deklarasikan
 * memiliki 3 scope global scope, local scope, block scope
 */

// const web = 'cahkoding'
// web = 'dicoding.com'
// console.log(web)

// const idn  = 'alek'

// function identitas(){
//     console.log(idn)

//     if (true){
//         let siswa = 'rizki'
//         console.log(siswa)
//     }
// }
// identitas()

/**
 * tipe data di javascript itu ada 7
 * 
 * null
 * undefined
 * boolean
 * number
 * bigInt
 * string
 * symbol
 * js merupakan salah satu looselu language (varible tidak terikat dengan tipe 
 * data tertentu) namun, nilai dari variable yang memiliki tipe data
 */

/**
 * pengecekan tipe data
 * 
 * untuk pengecekan tipe data bisa menggunakan operator typeof
 * example:
 */

// let name
// console.log(typeof name)

// name = 'yuuki asuna'
// console.log(typeof name)

/**
 * undefined
 * 
 * undefined merupakan tipe data primitive yang nilainya undefined atau tidak didefinisikan 
 * ini merupakan tipe data default untuk variable yang tidak ada nilai 
 */

// let name
// console.log(name)

/**
 * null
 * 
 * tipe data null adalah tipe data primitif yang nilai nya null. bedanya hanya di letaknya
 * saja dengan undefined
 */

// let obj = null
// console.log(typeof obj)

/**
 * Number
 * 
 * tipe data yang mewakili angka, biasanya bilangan bulat, floating atau desimal
 * 
 * example:
 */

// let num = 100
// let min = -100
// let des = 2.1

/**
 * NaN(Not a Number)
 * 
 * NaN(Not a Number) merupakan nilai numeric spesial. dia memberitahu bahwa nilai dari 
 * variable tersebut merupakan invalid number atau bukan termasuk angka
 * 
 * example:
 */

// console.log(a/2)

/**
 * keunikan dari nilai NaN
 * 
 *1.operator matematika yang menghasilkan NaN
  2.operasi perbandingan tidak dapat dilakukan pada nilai yang akan menghasilkan false

  contoh:
 */

//   console.log(100.0/100)
//   console.log(NaN/NaN)

//   console.log(100 == 100.0)
//   console.log(NaN == NaN)

/**
 * String
 * 
 * tipe data string merupakan salah satu tipe data yang berhubugan dengan karakter 
 * cirinya menggunakan '' atau petik dua ""
 example:  
*/

// let nama = "kirito"
// console.log(nama)

//menghitung karakter

// let namewa = "rin tohsaka"
// console.log(namewa.length)

// looping

// let word = 'hello'
// for (let i = 0; i < word.length; i++){
//     console.log(word[i])
// }

// let belajar = true
// if(belajar){
//     console.log('10 RPL B sedang belajar web')
// }

/**
 * object 
 * 
 * tipe data object merupakan tipe data kompleks yang terdiri dari property
 * (props), setiap properti berisi pasangan key : value
 * 
 * example:
 */
//object kosong
// let empatyObject = {}

// let identitas = {
//     id : 1,
//     firstName = 'saleh',
//     lastName = 'rashid',
//     age = 17
// }

//nested object, didalam object ada object lain
// let biodata = {
//     firstName : 'yogi',
//     lastName : 'pamungkas',
//     email : 'example@gmail.com',
//     phone : '0895380230034',
//     addres : {
//         city : 'brebes',
//         country : 'indonesia'
//     }
// }
// console.log(biodata.firstName)
// console.log(biodata.addres.city)
// console.log(biodata['addres']['city'])

//template literal 

// const firstName = "saleh"
// const lastName = "rashid"
// console.log('hai' + ' ' + firstName + ' ' + lastName + ', ' + 'kelas 10 rpl b') //terlalu ribet
// console.log(`hai ${firstName} ${lastName}, kelas 10 rpl b`) //lumayan simpel dari pada diatas gua

//shorthand property names

//cara biasa
// let a = 1
// let b = 2

//cara singkat
// let = a, b = 2, c = 3

//shorthand property names
// let[a,b,c] = ['ayam', 'bebek', 'burung']
// console.log(`${a} + ${b} = ${c}`)

/**
 * Function
 * blok kode yang digunakan untuk membungkus suatu proses agar tidak ditulis kembali secara berulang 
 * 
 * penulisan function, ada yang memiliki parameter dan ada yang tidak memiliki parameter
 */

// function example(parameter){
//     console.log(parameter)
// }
// example('ini function dengan parameter')

//arrow function
// const example = (parameter) =>{
//     console.log(parameter)
// }
// example('ini function dengan arrow function')

//arrow function, tapi lebih ringkas

// let hitung = (angka1, angka2) => `${angka1} dikali ${angka2} = ${angka1 * angka2}`
// console.log(hitung(19,5))

/**
 * high order function 
 * function yang menerima argumen berupa function lain 
 * 
 * callback function 
 * function yang akan menjadi argumen dalam pemanggilan high order function
 */

function genap(number){
    return number % 2 == 0
}
function printGenap(number, panggilBalik){
    let isTrue = panggilBalik(number)
    if(isTrue){
        console.log(`${number} genap`)
    }else if(isTrue == false){
        console.log(`${number} ganjil`)
    }
}
printGenap(1, genap)  


