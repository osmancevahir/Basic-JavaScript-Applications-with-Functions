
function ciftSayilariYazdirma(x){
    for(var s=0; s<=x; s=s+2){
        document.write(s+"<br>");
    }
}

//değişkenimize ekrandan bir değer girilmesini istiyoruz
var deger = Number(prompt("Bir sayı giriniz:"));


ciftSayilariYazdirma(deger);