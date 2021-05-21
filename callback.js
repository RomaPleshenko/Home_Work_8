function mainFunction(callback) {
    let num = +prompt("Введите число");
    let exponent = +prompt("Введите степень");
    callback(num,exponent);
}
function exponentiation(num, exponent) {
    let result = Math.pow(num,exponent);
    alert(result);
}
function multiplay (num, exponent){
    let result = num*exponent;
    alert(result);
}
function division (num, exponent){
    let result =num/exponent;
    alert(result);
}
function modulo(num,exponent){
    let result =num%exponent;
    alert(result);
}
mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);