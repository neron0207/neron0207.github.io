'use strict';
console.log('貴様、見ているな？');
const isi=window.prompt('青輝石の数を入力してください')
const yokose=document.querySelector('p');
if(isi<3000){
    yokose.textContent='がんばれ';
}else if(isi<5000){
    yokose.textContent='いいね';
}else if(isi<10000){
    yokose.textContent='分けてくれ';
}else if(isi<15000){
    yokose.textContent='半分くれ';
}else if(isi<24000){
    yokose.textContent='くれ';
}else if(isi<48000){
    yokose.textContent='は？';
}else if(isi>48000){
    yokose.textContent='なんなんお前';
}else{
    yokose.textContent='草';
}
