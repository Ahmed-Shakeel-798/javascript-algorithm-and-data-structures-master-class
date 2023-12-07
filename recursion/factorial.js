const calcFactorial = function (num) {
    if (num <= 1) return 1;

    const factorial = num * calcFactorial(num - 1);
    return factorial;
}

console.log(calcFactorial(5));