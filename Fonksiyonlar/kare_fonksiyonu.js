//fonksiyonu tanımlıyoruz
function kare(a){
    var kare=a*a;
    return kare;
}

//kullanıcıdan bir sayı girmesini istiyoruz
var sayi=Number(prompt("Bir sayı giriniz:"));

//bir değişken oluşturup değişkenin içerisine kare fonksiyonunu çağırıyoruz
var karesi=kare(sayi);// burayı kaldırıp sadece kare(sayi) olarak da aşağıda çalıştırabiliriz

//ekrana yazdırıyoruz
alert("Sayınını karesi: "+karesi);