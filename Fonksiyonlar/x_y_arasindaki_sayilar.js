//for ile fonksiyonumuzu yazıyoruz
function sayilariGetir(x,y){
    document.write("X ile Y arasındaki sayılar:<br>");
    for(; x<=y; x++){
        document.write(x+"<br>");
    }
}

//while ile fonksiyonumuz yazıyoruz
function sayilariGetir2(x,y){
    document.write("X ile Y arasındaki sayılar:<br>");
    while(x<=y){
        document.write(x+"<br>");
        x++;
    }
}

//ekrandan değerleri alıyoruz
sayi1 = Number(prompt("Küçük sayıyı giriniz:"));
sayi2 = Number(prompt("Büyük sayıyı giriniz:"));

//aldığımız değerleri fonksiyonu çağırıp ekrana yazdırıyoruz
sayilariGetir2(sayi1,sayi2);