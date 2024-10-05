
// function merhaba(){
//     var sayi, n;
//     sayi = Number(prompt("Bir sayı giriniz:"));
//     for(n=1; sayi >= n; sayi--){
//         document.write("Merhaba<br>");
//     }
// }

// merhaba();

function merhaba(){
    document.write("Merhaba<br>");
}

var s, n;
n=Number(prompt("Bir Sayi giriniz:"));

//merhaba fonksiyonunu n defa çalıştıralım
for(s=1; s<=n; s++){
    merhaba();
}