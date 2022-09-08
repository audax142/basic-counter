const add = document.getElementById('addbutton');
//dökümandaki "addbutton" id sine sahip elemana ulaşur 

const remove = document.getElementById('removebutton');
//dökümandaki "removebutton" id sine sahip elemana ulaşır

const int = document.getElementById('number');
//dökümandaki "number" id sine sahip elemana ulaşır

//üst taraftaki 3 satır "sabit" bir değiken oluşturur ve bu değişkenler ile dökümandaki elamanlara(dökümanlara değişkeni atar) ulaşır

let integer = 0;
//bu satırda "sabit olmayan" bir değişken oluşturuluyor ve değişkene "0" atanıyor

add.addEventListener('click', function () {
  integer += 1;
  int.innerHTML = integer;
})
//"add" isimli değikene bir dinleyici atanır bu dinleyici "clik" olayını dinler ve bununla beraber alt satırdaki fonksiyonlar işleme girer
//"integer" değişkenine "1" eklenir
//dökümandaki "int" değişkenin içine "integer" atanır 

remove.addEventListener('click', function () {
  if (integer >= 1) {
    integer -= 1;
    int.innerHTML = integer;
  }
});
//"remove" isimli değişkene  bir dinleyici atanır bu dinleyici "clik" olayını dinler ve bununla beraber alt satırdaki fonksiyonlar işleme girer
//eğer "integer" "1" den büyükse veya "1" e eşitse şunları yap
//"integer" değişkenden "1" çıkar
//dökümandaki "int" değişkenin içine "integer" ata