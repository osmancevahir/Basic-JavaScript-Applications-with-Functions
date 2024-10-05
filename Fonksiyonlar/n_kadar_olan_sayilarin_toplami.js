//fonksiyonumuzu yazıyoruz
function toplam(x){
    var toplam = 0;
    for(var i=1; i<=x; i++){
        toplam = toplam + i;
        document.write(i+"-");
    }
    document.write("<br>");5
    document.write("Toplam: "+toplam);
}

//ekrandan veri girilmesini sağlayalım
sayi = Number(prompt("Bir sayı giriniz:"));

//alınan değeri fonksiyonda yazalım
toplam(sayi);