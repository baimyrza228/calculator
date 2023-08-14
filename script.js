let op;

const func =() =>{
    let res;
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

switch (op) {
    case '+':
        res = num1+num2
        break
    case '-':
        res = num1-num2
        break
    case '/':
        res = num1 / num2
        break
    case '*':
        res = num1 * num2
        break
}document.getElementById('res').innerHTML = res
}