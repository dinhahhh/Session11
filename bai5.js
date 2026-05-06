let weigh = prompt("Hay nhap vao chi so can nang");
let heigh = prompt("Hay nhap vao chi so chieu cao");
let result = weigh/(heigh * heigh);
if(result < 18.5){
alert("Cân nặng thấp (gầy)");
}else if(24.9 >result ){
alert("Bình thường");
}else if(result >= 25){
alert("Thừa cân");
}else if(29.9 >result){
alert("Béo phì");
}else if(34.9 >result){
alert("Béo phì độ I");
}else if(39.9 >result ){
alert("Béo phì độ II");
}else{
alert("Béo phì độ III");
}