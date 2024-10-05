
var a=2; b=1;   //global(küresel) değişken
function topla(){
    toplam = 0;     //yerel değişken
    toplam = a+b;
    alert("Toplam: "+toplam);
}
topla();

function carp(){
    carpim = 0;     //yerel değişken
    carpim = a*b;   //yerel değişken
    alert("Çarpım: "+carpim);
}
carp();