let a = Number(prompt("Mời bạn nhập vào số a"));
let b = Number(prompt("Mời bạn nhập vào số b"));
let c = prompt("Mời bạn nhập vào phép tính (+,-,*,/)");
switch(c){
case "+":
result = a + b;
break;
case "-":
result = a - b;
break;
case "*":
result = a * b;
break;
case "/":
result = a / b;  
break;
default:
result = "Phep tinh khong hop le"
}
alert("Ket qua cua phep tinh tren :" + result);