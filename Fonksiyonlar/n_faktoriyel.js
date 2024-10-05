
//fonksiyonumu yazalım
function faktoriyel(n){
    var carp = 1;
    for(var i=1; i<=n; i++){
        carp=carp*i;  
    }
    return carp;        //carp değişkenini ana programa döndürür
}

//ekrandan değer alalım 
var sayi = Number(prompt("Bir sayı giriniz:"));

//fonksiyonu çağırıp sayımızı içerisine atalım
document.write(faktoriyel(sayi));